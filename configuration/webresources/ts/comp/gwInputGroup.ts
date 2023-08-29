import {GwDomNode, GwMap, HTMLCheckboxElement} from "../types/gwTypes";
import {GwRegisteredSystem} from "../core/util/GwRegisteredSystem";
import {gwUtil} from "../core/util/gwUtil";

/**
 * Guidewire's TypeScript APIs are an early-stage feature and are subject to change in a future release.
 */
export class GwInputGroup extends GwRegisteredSystem {
  getSystemName (): string {
    return "gwInputGroup";
  }

  toggle (widget: GwDomNode, args: GwMap): void {
    const checkboxId = args.checkboxId;
    const expanded = (widget.querySelector("input") as HTMLCheckboxElement).checked;
    if (expanded) {
      if (widget.hasAttribute("data-gw-client-toggle")) {
        this.expandGroup(checkboxId);
      } else {
        gwUtil.refresh();
      }
    } else {
      this.collapseGroup(checkboxId);
      widget.setAttribute("data-gw-client-toggle", "true");
    }
  }

  private expandGroup (checkboxId: string): void {
    this.toggleGroup(checkboxId, true);
  }

  private collapseGroup (checkboxId: string): void {
    this.toggleGroup(checkboxId, false);
  }

  private toggleGroup (checkboxId: string, expand: boolean = false): void {
    const groupId = checkboxId.replace("-_checkbox", "");
    gwUtil.conditionalAddRemoveClass(!expand, "#" + groupId, ".gw-InputGroup--collapsed");
  }
}

export const gwInputGroup = new GwInputGroup();
