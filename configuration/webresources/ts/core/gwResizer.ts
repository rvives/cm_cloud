import {GW_BREAKER, GwDomNode, GwPartialReloadDetails, GwPartialReloadReason} from "../types/gwTypes";
import {gwMenus} from "./gwMenus";
import {gwUtil} from "./util/gwUtil";
import {gwScroll} from "./gwScroll";
import {GwOrderDependentInitializableSystem} from "./util/GwOrderDependentInitializableSystem";
import {gwSouthPanel} from "../comp/gwSouthPanel";
import {gwWestPanel} from "../comp/gwWestPanel";
import {gwInputSystems} from "./inputs/gwInputSystems";
import {gwPrefPanel} from "./gwPrefPanel";

const SCROLL_AMOUNT_TO_MODIFY_CENTER_BAR = 40;
const NAV_BAR_SCROLL_ATTR = "data-gw-hidden-by-scroll";

/**
 * Guidewire's TypeScript APIs are an early-stage feature and are subject to change in a future release.
 */
export class GwResizer extends GwOrderDependentInitializableSystem {
  getSystemName (): string {
    return "gwResizer";
  }

  private navBarIsVisible: boolean = true;
  private _lastCenterScrollTop: number = 0;
  private _lastCenterScrollHeight: number = 0;
  private clearScrollTimeoutId: number | null = null;
  private resizerTimeoutId: number | null = null;
  private currentHamburger: GwDomNode | null = null;
  private currentHamburgerSubMenu: GwDomNode | null = null;
  private currentTabHolder: GwDomNode | null = null;

  private _windowHeight: number = -1;
  private _windowWidth: number = -1;
  private _forceRecalcOnNextPartialPageLoad: boolean = false;
  private readonly _resizeCallbacks: (() => void)[] = [];

  orderSpecificInit (isFullPageReload: boolean, partialReloadDetails?: GwPartialReloadDetails): void {
    if (isFullPageReload) {
      window.addEventListener("resize", this.onResize.bind(this));
    }

    if (isFullPageReload || this._forceRecalcOnNextPartialPageLoad || this.containsTabChanges(partialReloadDetails)) {
      this._forceRecalcOnNextPartialPageLoad = false;
      this.recalcPanelSizing(isFullPageReload);
    } else {
      // Ensure center panel is correctly sized in case there were south panel changes
      this.recalcCenterPanel();
    }
  }

  get windowHeight (): number {
    if (this._windowHeight === -1) {
      this.updateWindowHeightAndWidth();
    }
    return this._windowHeight;
  }

  get windowWidth (): number {
    if (this._windowWidth === -1) {
      this.updateWindowHeightAndWidth();
    }
    return this._windowWidth;
  }

  private updateWindowHeightAndWidth (): void {
    this._windowHeight = window.innerHeight;
    this._windowWidth = window.innerWidth;
  }

  forceRecalcOnNextPartialPageLoad (): void {
    this._forceRecalcOnNextPartialPageLoad = true;
  }

  /**
   * Called by resize event.
   */
  recalcPanelSizing (isFullPageReload: boolean = false): void {
    this.resizerTimeoutId = null;

    this.updateWindowHeightAndWidth();

    if (!isFullPageReload) {
      gwMenus.closeAllMenus();
      gwInputSystems.closeOpenInputs();
    }

    gwWestPanel.restoreWestPanelWidth(false);
    this.recalcCenterPanel();
  }

  /**
   * Needs to be called any time the screen size changes, or the south or west panel change their size.
   */
  recalcCenterPanel (): void {
    const centerTopSection = document.getElementById("gw-center-top-section");
    if (!centerTopSection) {
      return;
    }

    const northPanelH = document.getElementById("gw-north-panel")!.getBoundingClientRect().height || 0;
    const centerPanelTopSectionRect = centerTopSection.getBoundingClientRect();
    const centerPanelTopSectionH = centerPanelTopSectionRect.height || 0;
    const southPanelH = gwSouthPanel.ensureHeightFits(this.windowHeight - (northPanelH + centerPanelTopSectionH));

    const centerHeight = this.windowHeight - (northPanelH + southPanelH) + "px";
    document.getElementById("gw-west-center")!.style.height = centerHeight;
    document.getElementById("gw-center-panel")!.style.height = centerHeight;

    this.recalcTabBarSizing(centerPanelTopSectionRect);
  }

  private recalcTabBarSizing (centerPanelTopSectionRect: ClientRect | DOMRect): void {
    this.currentTabHolder = gwUtil.getDomNode(".gw-TabBarWidget--tab-holder");
    if (!this.currentTabHolder) {
      return;
    }

    const iconHolder = gwUtil.getDomNode(".gw-TabBarWidget--icon-holder");
    if (!iconHolder) {
      return;
    }

    this.currentHamburger = gwUtil.getDomNode("#TabBarWidget--more-options");
    if (!this.currentHamburger) {
      return;
    }

    gwUtil.removeClass(this.currentHamburger, "gw-invisible");
    this.currentHamburgerSubMenu = this.currentHamburger.querySelector(".gw-subMenu");
    if (!this.currentHamburgerSubMenu) {
      return;
    }

    if (this.topNavIsFullyCollapsed()) {
      const reverseOrderChildren =  (Array.prototype.map.call(this.currentTabHolder.children, (el: HTMLElement) => el) as HTMLElement[]).reverse();

      for (let i = 0; i < reverseOrderChildren.length; i++) {
        const child = reverseOrderChildren[i];
        this.currentHamburgerSubMenu.insertBefore(child, this.currentHamburgerSubMenu.firstChild);
      }
    } else {
      let rightWidth = 0;

      if (!this.isCompactHamburgerMenu()) {
        const quickjump = gwUtil.getDomNode(".gw-QuickjumpWidget");

        if (quickjump) {
          rightWidth = quickjump.offsetWidth;
        } else {
          rightWidth = 0;
        }
      }

      const centerTopSection = document.getElementById("gw-center-top-section");
      if (!centerTopSection) {
        return;
      }

      const dropOffLineRight = centerPanelTopSectionRect.left + (centerPanelTopSectionRect.width - (iconHolder.offsetWidth + rightWidth) * 1.05); //Magic number just to prevent rounding issues on resizing the screen slowly back and forth

      // Add all the tabs back into the tab bar, then calculate which ones have to go into the hamburger menu
      this.addTabsBack();

      const children = this.currentTabHolder.children;
      const addThese = [];

      for (let i = children.length - 1; i >= 0; i--) {
        const child: HTMLElement = children[i] as HTMLElement;
        if (!child) {
          continue;
        }
        // We have to check this, because widgets with display: none, report a right rect of 0;
        if (child.offsetWidth <= 0) {
          continue;
        }

        if (child.getBoundingClientRect().right >= dropOffLineRight) {
          addThese.push(child);
        }
      }

      for (let i = 0; i < addThese.length; i++) {
        const child = addThese[i];
        this.currentHamburgerSubMenu.insertBefore(child, this.currentHamburgerSubMenu.firstChild);
      }
    }
    this.processTabsInBarAndHamburger();
  }

  private canLiveInTabBar (child: HTMLElement): boolean {
    const id = child.id;
    if (!gwUtil.hasClass(child, "gw-TabWidget")) {
      return false;
    }

    return !(id === "TabBarWidget--more-options" || id === "gw-TabBarWidget--settings" || id === "TabBar-UnsavedWorkTabBarLink");
  }

  /**
   * Walks the currentHamburgerSubMenu.children and removes all classes relating to being in the top nav bar.
   * If the subMenu has no children, then hides the hamburger menu.
   */
  private processTabsInBarAndHamburger (): void {
    gwUtil.forEach(this.currentHamburgerSubMenu!.children, (child) => {
        gwUtil.removeClass(child, ["gw-putSubMenusBelow", "gw-isTopLevelMenu"]);
    });

    gwUtil.forEach(this.currentTabHolder!.children, (child) => {
        gwUtil.addClass(child, ["gw-putSubMenusBelow", "gw-isTopLevelMenu"]);
    });

    gwUtil.conditionalAddRemoveClass(!this.currentHamburgerSubMenu!.children.length, this.currentHamburger!, "gw-invisible");
  }

  private isCompactHamburgerMenu (): boolean {
    return gwPrefPanel.getTopNavCollapseLevel() !== "none";
  }

  private topNavIsFullyCollapsed (): boolean {
    return gwPrefPanel.getTopNavCollapseLevel() === "all";
  }

  /**
   * Adds all tabs back into the tab bar
   */
  private addTabsBack (): void {
    const addBack: GwDomNode[] = [];

    gwUtil.forEach(this.currentHamburgerSubMenu!.children, (child: GwDomNode) => {
      if (this.canLiveInTabBar(child)) {
        addBack.push(child);
      }
    });

    addBack.forEach((child: GwDomNode) => {
      this.currentTabHolder!.appendChild(child);
    });

    this.processTabsInBarAndHamburger();
  }

  /**
   * Called by the resize event listener on the window.
   */
  private onResize (): void {
    if (this.resizerTimeoutId) {
      clearTimeout(this.resizerTimeoutId);
    }

    // This is just to make sure if the user yanks the screen size, we don't end up processing a stack of them, when we just need to do the last one.
    this.resizerTimeoutId = setTimeout(() => {
      this.recalcPanelSizing();
      gwScroll.clearStoredScrollPositions();
      this._resizeCallbacks.forEach(callback => callback());
    }, 0);
  }

  /**
   * Do the details of the given partial reload indicate that something in the tab bar area may have changed?
   * @param partialReloadDetails details of the partial page reload
   * @returns {boolean} true if any of the ids refer to items in the tab bar
   */
  private containsTabChanges (partialReloadDetails?: GwPartialReloadDetails): boolean {
    if (!partialReloadDetails || partialReloadDetails.reason !== GwPartialReloadReason.REPLACE_ITEMS) {
      // Assume the worst
      return true;
    }

    let found = false;

    gwUtil.forEach(partialReloadDetails.ids, (id) => {
      if (id === "gw-body") {
        gwUtil.devlog("INFO: gw-body is targeted for replace; tab bar area may have changed.");
        found = true;
        return GW_BREAKER;
      }

      if (gwUtil.getSelfOrFirstParentWithClass(gwUtil.getDomNode("#" + id), "gw-north-panel")) {
        found = true;
        return GW_BREAKER;
      }

      return;
    });

    return found;
  }

  check (): void {
    this.onResize();
  }

  addResizeCallback (callback: () => void): void {
    this._resizeCallbacks.push(callback);
  }

  private getCenterTabBar (): HTMLDivElement {
    return gwUtil.getDomNodeOrThrow("#gw-center-tab-bar") as HTMLDivElement;
  }

  setNavToShow (): void {
    const navBar = this.getCenterTabBar();
    navBar.style.height = null;
    navBar.style.opacity = "1";
    navBar.removeAttribute(NAV_BAR_SCROLL_ATTR);
    this.navBarIsVisible = true;
  }

  setNavToHide (): void {
    const navBar = this.getCenterTabBar();
    navBar.style.height = "0px";
    navBar.style.opacity = "0";
    navBar.setAttribute(NAV_BAR_SCROLL_ATTR, "true");
    this.navBarIsVisible = false;
    gwMenus.closeAllMenusContainedBy(navBar);
  }

  /**
   * Returns true if nav bar was hidden and element was child
   * @param possibleChild
   */
  showNavBarIfElementIsChild (possibleChild: HTMLElement): boolean {
    if (this.navBarIsVisible) {
      return false;
    }

    const foundNavBarParent = gwUtil.getSelfOrFirstParentWithAttr(possibleChild, NAV_BAR_SCROLL_ATTR);
    if (foundNavBarParent) {
      this.setNavToShow();
      return true;
    }

    return false;
  }

  /**
   * Function called by gwEvent global scroll handler when the scroll target is the center page area.
   * If the preference scrollingCenterHidesTopNav is set to true, then this method will show/hide the top nav based on user scroll direction
   * @param centerPanelDiv
   */
  onCenterPanelScroll (centerPanelDiv: HTMLDivElement): void {
    if (this.clearScrollTimeoutId) {
      clearTimeout(this.clearScrollTimeoutId);
    }

    if (gwPrefPanel.getPrefValueByPrefName("scrollingCenterHidesTopNav") === false) {
      return;
    }

    this.clearScrollTimeoutId = window.setTimeout(() => {
      const zeroFloorScrollTop = Math.min(Math.max(0, centerPanelDiv.scrollTop), centerPanelDiv.scrollHeight - 1);

      if (zeroFloorScrollTop <= 1) {
        this._lastCenterScrollTop = zeroFloorScrollTop;
        this._lastCenterScrollHeight = centerPanelDiv.scrollHeight;
        this.setNavToShow();
        return;
      }

      // If these don't match, then the scroll was triggered by a resize, so ignore it
      if (this._lastCenterScrollHeight !== centerPanelDiv.scrollHeight) {
        this._lastCenterScrollTop = zeroFloorScrollTop;
        this._lastCenterScrollHeight = centerPanelDiv.scrollHeight;
        return;
      }

      // Add some fuzzyness so it feels "slow" to respond, instead of snapping into animate everytime you scroll a little
      if (Math.abs(zeroFloorScrollTop - this._lastCenterScrollTop) <= SCROLL_AMOUNT_TO_MODIFY_CENTER_BAR) {
        return;
      }

      // User started scrolling up, so clear changes so the nav will animate in
      if (zeroFloorScrollTop < this._lastCenterScrollTop) {

        this.setNavToShow();
      } else if (zeroFloorScrollTop > this._lastCenterScrollTop) {
        // User scrolled down, so set the bar's hidden values, and let CSS transitions handle the rest
        this.setNavToHide();
      }

      this._lastCenterScrollTop = zeroFloorScrollTop;
      this._lastCenterScrollHeight = centerPanelDiv.scrollHeight;

    }, 10);
  }
}

export const gwResizer = new GwResizer();
