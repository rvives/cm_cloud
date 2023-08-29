import {gwUtil} from "./util/gwUtil";
import {GwMap} from "../types/gwTypes";
import {gwPerfAnalyzer} from "./events/gwPerfAnalyzer";
import {gwAjax} from "./util/gwAjax";
import {gwMessages} from "../comp/gwMessages";

/**
 * Guidewire's TypeScript APIs are an early-stage feature and are subject to change in a future release.
 */
export class GwFileRequest {
  private static readonly REQUEST_ID_PARAM: string = "downloadRequestId";
  private static readonly STATUS_PARAM: string = "__downloadStatus";
  private static readonly WAIT_TILL_STATUS_REQUEST: number = 100;

  private readonly _requestId: string = this.generateId();
  private readonly _isInline: boolean;

  constructor (inline: boolean) {
    this._isInline = inline;
  }

  downloadDirectly (parameters: GwMap): void {
    this.submitForm("FileContents.do", parameters);
  }

  postDownloadRequest (eventSource: string): void {
    if (eventSource) {
      gwPerfAnalyzer.startRequest(eventSource);
      $("#gw-event-source").val(eventSource);
    }

    this.submitForm("", {});
  }

  /**
   * Submit main form in a regular way (w/o ajax Form plugin)
   * @param action: form action
   * @param parameters: additional parameters to submit
   */
  private submitForm (action: string, parameters: GwMap): void {
    const htmlForm: HTMLFormElement = $("#gw-root-form")[0] as HTMLFormElement;
    this.wrapWithParameters(htmlForm, parameters, () => {
      const target = "formWindow" + this._requestId;
      const downloadWindow: Window|HTMLIFrameElement|null = this.createDownloadWindow(target);
      if (!downloadWindow) {
        console.error("Cannot open new window. Stop downloading");
        return;
      }
      const oldAction = htmlForm.action;
      const oldTarget = htmlForm.target;
      htmlForm.action = action;
      htmlForm.target = target;

      htmlForm.submit();

      this.checkDownloadStatus(downloadWindow);

      if (oldAction) {
        htmlForm.action = oldAction;
      } else {
        htmlForm.removeAttribute("action");
      }

      if (oldTarget) {
        htmlForm.target = oldTarget;
      } else {
        htmlForm.removeAttribute("target");
      }

      gwUtil.clearEventParam();
      gwPerfAnalyzer.requestSent();
    });
  }

  private wrapWithParameters (form: HTMLFormElement, parameters: GwMap, formCode: () => void): void {
    const inputs = [];
    for (const param in parameters) {
      if (!parameters.hasOwnProperty(param)) {
        continue;
      }

      inputs.push(
        this.createInput(form, param, parameters[param]));
    }

    inputs.push(
      this.createInput(form, GwFileRequest.REQUEST_ID_PARAM, this._requestId));

    formCode();

    inputs.forEach(($input) => {
      $input.remove();
    });
  }

  private createInput (form: HTMLFormElement, name: string, value: string): any {
    const $input = $("<input>", {
      name: name,
      value: value,
      type: "hidden"
    });

    $(form).append($input);
    return $input;
  }

  private checkDownloadStatus (downloadWindow: Window | HTMLIFrameElement): void {
    setTimeout(() => {
      const parameters: GwMap = {};
      parameters[GwFileRequest.STATUS_PARAM] = this._requestId;
      gwAjax.ajaxRequest(parameters,
        (response: any) => {
          if (response.success) {
            if (!this._isInline) {
              this.closeDownloadWindow(downloadWindow);
            }
          } else {
            // Server will have sent rendered error message
            gwMessages.addFileDownloadError(response.error);
            this.closeDownloadWindow(downloadWindow);
          }
        },
        (error) => {
          // status request failed, just close the window likely it does not contain anything interesting
          this.closeDownloadWindow(downloadWindow);
          console.error("Something went wrong: " + error);
        });
    }, GwFileRequest.WAIT_TILL_STATUS_REQUEST);
  }

  private createDownloadWindow (target: string): Window | HTMLIFrameElement | null {
    if (this._isInline) {
      return window.open("about:blank", target);
    } else {
      const iFrame = document.createElement("iframe");
      iFrame.name = target;
      iFrame.style.visibility = "hidden";
      document.body.appendChild(iFrame);
      return iFrame;
    }
  }

  private closeDownloadWindow (download: Window | HTMLIFrameElement): void {
    // Cannot just do instanceof Window here; on Edge/IE the result of window.open is not a Window(!)
    if (this._isInline) {
      (download as Window).close();
    } else {
      document.body.removeChild(download as HTMLIFrameElement);
    }
  }

  private generateId (): string {
    const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let id = "";
    for (let i = 0; i < 5; i++) {
      id += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }

    return id + Date.now();
  }

}