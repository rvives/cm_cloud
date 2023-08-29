import {GwRegisteredSystem} from "./GwRegisteredSystem";
import {GwAjaxResponseStatus, GwMap} from "../../types/gwTypes";
import {gwEvents} from "../events/gwEvents";
import {gwDisplayKey} from "../gwDisplayKey";
import {gwUtil} from "./gwUtil";
import {gwConfig} from "../gwConfig";
import ErrorTextStatus = JQuery.Ajax.ErrorTextStatus;
import jqXHR = JQuery.jqXHR;

/**
 * Guidewire's TypeScript APIs are an early-stage feature and are subject to change in a future release.
 */
export type SuccessCallback = (response: any) => void;
export type ErrorCallback = (request: JQueryXHR,
                             response: any,
                             errorType: GwAjaxResponseStatus,
                             httpErrorString: string | null) => boolean | void;

export class GwAjax extends GwRegisteredSystem {
  private ajaxRequestCount: number = 0;

  getSystemName (): string {
    return "gwAjax";
  }

  /**
   * Returns true if there any requests pending
   */
  hasPendingAjaxRequests (): boolean {
    return this.ajaxRequestCount !== 0;
  }

  /**
   * Gets the current CSRF token for a new request to the server.
   */
  getCsrfToken (): string {
    return gwUtil.getUtilityInfo("csrfToken");
  }

  /**
   * @public
   * utility method for making a custom Ajax request to the server. If the call succeeds the given callback
   * is called, with the response, status text and Ajax request object as arguments. If the call fails the
   * optional error callback is called with optional GwAjaxResponseStatus and optional response as arguments; it should just be used
   * to clean up but if certain errorCallback wants to take over displaying the message it can return true
   * to indicate no standard error display is needed after the errorCallback. Any actual error handling will be dealt with
   * by the standard "handleFailedRequest" routine.
   */
  ajaxRequest (parameters: GwMap,
               successCallback: SuccessCallback,
               errorCallback?: ErrorCallback): void {
    parameters[gwUtil.CSRF_PARAM_NAME] = this.getCsrfToken();

    const props: JQueryAjaxSettings = {
      url: window.location.href,
      data: parameters,
      dataType: "json",
      type: "POST",
      beforeSend: () => {
        this.ajaxRequestCount++;
      },
      success: (response, status, request) => {
        this.ajaxRequestCount--;
        this.onRequestSuccess(request, response, successCallback, errorCallback);
      },
      error: (request, errorType, httpErrorString) => {
        this.ajaxRequestCount--;
        this.onRequestError(request, errorType, httpErrorString, errorCallback);
      },
      timeout: gwConfig.serverTimeoutMillis()
    };

    $.ajax(props);
  }

  /**
   * Called on a successful response from the server. Inspects the response for errors, if none are present hands
   * the response off to the registered callback.
   */
  private onRequestSuccess (request: jqXHR, response: any, successCallback: SuccessCallback, errorCallback?: ErrorCallback): void {
    const errorType = this.determineErrorType(response, null);

    if (errorType === GwAjaxResponseStatus.OK) {
      successCallback(response);
    } else {
      this.onRequestError(request, null, response.exceptionText, errorCallback, response);
    }
  }

  /**
   * Called on a failed request to the server, either because the request itself failed or because
   * the server responded that an error occurred during processing.
   *
   * Gives the caller's ErrorCallback a chance to handle the issue. If it isn't handled,
   * the general error handling takes over.
   */
  onRequestError (request: any, errorStatus: ErrorTextStatus | null, httpErrorString: string, errorCallback?: ErrorCallback, response?: any): void  {
    const errorType = this.determineErrorType(response, errorStatus);
    let handled;
    if (errorCallback) {
      handled = errorCallback(request, response, errorType, httpErrorString);
    }
    if (handled !== true) {
      this.handleFailedRequest(request, response, errorType, httpErrorString);
    }
  }

  private determineErrorType (response: any, status: ErrorTextStatus | null): GwAjaxResponseStatus {
    if (status) {
      switch (status) {
        case "timeout":
          return GwAjaxResponseStatus.TIMEOUT;
        default:
          return GwAjaxResponseStatus.FATAL_ERROR;
      }
    }
    if (response) {
      if (response.loggedOut) {
        return GwAjaxResponseStatus.LOGOUT;
      }
      if (response.displayableError) {
        return GwAjaxResponseStatus.DISPLAYABLE_ERROR;
      }
      return GwAjaxResponseStatus.OK;
    }
    return GwAjaxResponseStatus.FATAL_ERROR;
  }

  //Reverse order for handling, with custom handlers pushed on top.
  private readonly serverErrorHandlers: ErrorCallback[] = [
      this.badResponse.bind(this),
      this.httpError.bind(this),
      this.timedOut.bind(this),
      this.loggedOut.bind(this),
      this.alertDisplayable.bind(this)
  ];

  /**
   * Adds a custom error handler that will be called when an ajax request fails.
   */
  addServerErrorHandler (errorHandler: ErrorCallback): ErrorCallback {
    if (this.serverErrorHandlers.indexOf(errorHandler) >= 0) {
      return errorHandler;
    }
    this.serverErrorHandlers.push(errorHandler);
    return errorHandler;
  }

  /**
   * Removes the given error handler from the current set of handlers.
   */
  removeServerErrorHandler (errorHandler: ErrorCallback): void {
    if (!errorHandler) {
      return;
    }
    const index = this.serverErrorHandlers.indexOf(errorHandler);
    if (index >= 0) {
      this.serverErrorHandlers.splice(index, 1);
    }
  }

  /**
   * Handles a failed Ajax request, calling any registered error handlers. An Ajax request is considered
   * "failed" if the server did not respond at all, either a timeout occurs, or some other 500 is returned
   * by the server.
   */
  handleFailedRequest (request: JQueryXHR, response: any, errorType: GwAjaxResponseStatus, httpErrorString: string): void {
    if (this.callServerErrorHandlers(request, response, errorType, httpErrorString)) {
      return;
    }
    gwUtil.devlog("Unable to handle server error, ", [request, response, errorType, httpErrorString]);
  }

  private callServerErrorHandlers (request: JQueryXHR, response: any, errorType: GwAjaxResponseStatus, httpErrorString: string): boolean {
    for (let i = this.serverErrorHandlers.length - 1; i > 0; i--) {
      try {
        const errorHandler: ErrorCallback = this.serverErrorHandlers[i];
        const result = errorHandler(request, response, errorType, httpErrorString);

        if (result === true) {
          return true;
        }
      } catch (e) {
        // Continue
      }
    }
    return false;
  }

  private timedOut (request: JQueryXHR,
                    response: any,
                    errorType: GwAjaxResponseStatus): boolean {
    if (errorType === GwAjaxResponseStatus.TIMEOUT) {
      alert(gwDisplayKey.get("Web.Client.HTTPRequestTimedOut"));
      return true;
    }
    return false;
  }

  private loggedOut (request: JQueryXHR,
                     response: any): boolean {
    if (response && response.loggedOut) {
      alert(gwDisplayKey.get("Web.Client.AjaxRequestSessionExpired"));
      gwEvents.clearBeforeUnload();
      window.location.href = response.entryPoint;
      return true;
    }
    return false;
  }

  private httpError (request: JQueryXHR,
                     response: any,
                     errorType: GwAjaxResponseStatus,
                     httpErrorString: string | null): boolean {
    if (errorType === GwAjaxResponseStatus.FATAL_ERROR) {
      alert(gwDisplayKey.get("Web.Client.HTTPRequestFailed", request.status, httpErrorString || ""));
      return true;
    }
    return false;
  }

  private alertDisplayable (request: JQueryXHR,
                            response: any): boolean {
      if (response && response.exceptionText) {
        alert(gwDisplayKey.get("Web.Client.AjaxRequestServerError", response.exceptionText));
        return true;
      }
      return false;
  }

  private badResponse (request: JQueryXHR,
                       response: any,
                       errorType: GwAjaxResponseStatus): boolean {
    alert(gwDisplayKey.get("Web.Client.HTTPRequestBadResponse", request.status, errorType));
    return true;
  }
}

export const gwAjax = new GwAjax();