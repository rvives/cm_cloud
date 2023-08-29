import {GwMap} from "../types/gwTypes";
import {gwUtil} from "./util/gwUtil";
import {gwFocus} from "./gwFocus";
import {gwFileValue} from "../comp/gwFileValue";
import {GwOrderDependentInitializableSystem} from "./util/GwOrderDependentInitializableSystem";
import {gwApp} from "../plApp";
import {gwStorage} from "./gwStorage";
import {gwConfirm} from "./gwConfirm";

/**
 * Guidewire's TypeScript APIs are an early-stage feature and are subject to change in a future release.
 */
export enum GwClientCommand {
  REDIRECT = "REDIRECT",
  POPUP = "POPUP",
  REGISTER_DROPZONES = "REGISTER_DROPZONES",
  DEFERRED_DOWNLOAD = "DEFERRED_DOWNLOAD",
  FOCUS = "FOCUS"
}

export class GwOps extends GwOrderDependentInitializableSystem {
  getSystemName (): string {
    return "gwOps";
  }

  orderSpecificInit (): void {
    this.processClientOps();
  }

  processClientOps (): void {
    const clientCommands = gwUtil.getUtilityJson("gw-clientCommands");
    if (clientCommands) {
      clientCommands.forEach((clientCommand: GwMap) => {
        this.handleCommand(clientCommand.command, clientCommand.args);
      });
    }
  }

  handleCommand (command: GwClientCommand, args: GwMap): void {
    switch (command) {
      case GwClientCommand.REDIRECT:
        this.redirect(args.method, args.url, args.postParams, args.isMultiClusterNav, args.isLogout);
        break;
      case GwClientCommand.POPUP:
        this.popup(args.url, args.target, args.features);
        break;
      case GwClientCommand.REGISTER_DROPZONES:
        gwFileValue.registerDropzone(args);
        break;
      case GwClientCommand.DEFERRED_DOWNLOAD:
        gwFileValue.downloadManually(args);
        break;
      case GwClientCommand.FOCUS:
        const focusNode = gwUtil.getDomNode("#" + args.focusId);
        if (focusNode) {
          gwFocus.setFocusFromServer(focusNode);
        }
        break;
      default:
        gwUtil.devlog("Encountered unknown client command: ", command);
    }
  }

  redirect (method: string, url: string, parameters: GwMap, isMultiClusterNav: string, isLogout: boolean): void {
    if (isLogout) {
      gwStorage.clearStorage();
    }

    // Possibly set up an onbeforeunload handler so user has a chance to cancel navigating
    // away. If the user does cancel then the Edge browser will throw an exception
    const preventUnloadAlert = isMultiClusterNav === "true" || gwConfirm.lastEventWasConfirmed();
    gwApp.prepareForExitPointNavigation(preventUnloadAlert);
    if (method === "POST") {
      const form = document.createElement("form");
      form.action = url;
      form.method = "POST";
      form.target = "_top";

      if (parameters) {
        for (const name in parameters) {
          if (parameters.hasOwnProperty(name)) {
            const input = document.createElement("input");
            input.type = "hidden";
            input.name = name;
            input.value = parameters[name];
            form.appendChild(input);
          }
        }
      }

      document.body.appendChild(form);
      try {
        form.submit();
      } catch (e) {
        // Ignore; caused by cancellation of onbeforeunload confirmation on Edge
      }
      document.body.removeChild(form);

    } else {
      try {
        window.location.href = url;
      } catch (e) {
        // Ignore; caused by cancellation of onbeforeunload confirmation on Edge
      }
    }
  }

  popup (url?: string, target?: string, features?: string): void {
    window.open(url, target, features);
  }

}

export const gwOps = new GwOps();