import {GwAjaxResponseStatus, GwInputElement, GwMap, GwPartialReloadReason} from "../types/gwTypes";
import {gwPerfAnalyzer} from "./events/gwPerfAnalyzer";
import {gwUtil} from "./util/gwUtil";
import {gwEvents} from "./events/gwEvents";
import {gwAjax} from "./util/gwAjax";
import {gwConfig} from "./gwConfig";
import {gwApp} from "../plApp";
import ErrorTextStatus = JQuery.Ajax.ErrorTextStatus;
import AjaxSettings = JQuery.AjaxSettings;
import {GwInputValue} from "./inputs/gwInputs";

const rCRLF = /\r?\n/g;
const bodyPattern = /^\s*<div.*id='gw-body'/;

const handleResponse = (data: string | GwMap, request: JQueryXHR): void => {
    gwPerfAnalyzer.responseReceived();

    /**
     * We are replacing the entire body with a single string
     */
    if (typeof data === "string") {
        if (!!data.match(bodyPattern)) {
            gwUtil.replaceTarget("#gw-body", data, false);
            gwApp.fireAfterGwBodyReplace();
            return;
        }
    } else {
        /**
         * If there are response targets, then we are going to only replace individual elements
         */
        if (data.targets) {
            // If this is a partial page refresh, then we wrap the updater in a timeout, to let the renderer
            // TODO: not sure if this timeout is worth the possible oddness
            setTimeout(() => {
                const length = data.targets.length;
                if (length === 0) {
                    // Nothing has changed
                    gwUtil.devlog("Response.targets had a length of 0: ", data);
                    gwApp.fireAfterPartialPageReload({reason: GwPartialReloadReason.REPLACE_ITEMS, ids: []});
                    return;
                }
                gwUtil.replaceTargets(0, 0, 40 / length, data.targets, false);
            }, 0);
        }

        if (data.errorpage) {
            gwUtil.replaceTarget("#gw-body", data.errorpage, false);
            gwEvents.enableEvents();
            gwEvents.clearQueuedInternalClick();
        }
        return;
    }

    gwApp.fireAfterPartialPageReload({reason: GwPartialReloadReason.ERROR});
    gwAjax.handleFailedRequest(request, data, GwAjaxResponseStatus.UNEXPECTED_RESPONSE, "unexpected_response");
};

let namedNoFormInputs: GwMap = {};

function revertNamedNoFormInputs(): void {
    gwUtil.forEach(namedNoFormInputs, (type, id) => {
        const el = document.getElementById(id) as HTMLInputElement;
        if (el) {
            el.type = type;
        }
    });

    namedNoFormInputs = {};
}

function beforeSerialize(formEl: HTMLFormElement) {
    namedNoFormInputs = {};
    gwUtil.forEach(formEl.querySelectorAll("input[name][id].gw-noForm"), (node) => {
        namedNoFormInputs[node.id] = node.type;
        node.type = "hidden";
    });
}


export function gwFormSubmit(formEl: HTMLFormElement) {
    if (!$) {
        throw new Error("gwFormSubmit could not find a jQuery object at window.$")
    }
    beforeSerialize(formEl);

    const ajaxOptions: AjaxSettings = {
        success: (data: any, errorType: string, request: JQueryXHR) => {
            handleResponse(data as (string | GwMap), request);
            revertNamedNoFormInputs();
        },
        error: (request: JQueryXHR, errorType: ErrorTextStatus, httpErrorString: string) => {
            gwApp.fireAfterPartialPageReload({reason: GwPartialReloadReason.ERROR});
            gwAjax.onRequestError(request, errorType, httpErrorString);
            gwEvents.clearQueuedInternalClick();
            revertNamedNoFormInputs();
        },
        get timeout() {
            return gwConfig.serverTimeoutMillis.call(gwConfig);
        },
        data: $.param(formToArray(formEl)),
        url: ((window.location.href || '').match(/^([^#]+)/) || [])[1], //clear hash
        type: "POST",
    }

    $.ajax(ajaxOptions);
}


interface IFormNameAndValue {
    name: string,
    value: GwInputValue | File,
    type?: string
}

/**
 * Cribbed from jqueryForm:
 * MIT license
 * https://github.com/jquery-form/form#license
 * @param formEl
 */
function formToArray(formEl: HTMLFormElement): IFormNameAndValue[] {
    const keyValues: IFormNameAndValue[] = [];

    $.makeArray(formEl.elements)
        .filter<HTMLInputElement>((el: Element): el is HTMLInputElement => {
            return el && !!(el as HTMLInputElement).name;
        })
        .forEach((el) => {
            if (el.disabled) {
                if (el.type === "checkbox" && el.checked) {
                    // Then we are going to allow the checkbox to go to the server
                    // So that we don't convert a null value in the POST into a false
                    // When the checkbox value is actually true, but disabled
                } else {
                    // Otherwise ignore disabled elements
                    return;
                }
            }

            const name = el.name;
            const value = fieldValue(el);

            if (Array.isArray(value)) {
                value.forEach((innerVal) => {
                    keyValues.push({name, value: innerVal})
                });
            } else if (el.type === 'file') {
                const files = el.files;

                if (files && files.length) {
                    Array.prototype.forEach.call(files, (file: File) => {
                        keyValues.push({name, value: file, type: "file"});
                    })
                } else {
                    keyValues.push({name, value: '', type: "file"});
                }

            } else if (gwUtil.hasValue(value)) {
                keyValues.push({name, value, type: el.type});
            }
        });

    return keyValues;
}

/**
 * Cribbed from jqueryForm:
 * MIT license
 * https://github.com/jquery-form/form#license
 * @param el
 */
function fieldValue(el: GwInputElement): GwInputValue {
    const name = el.name;
    if (!name) {
        return null;
    }

    const elType = el.type;

    // We explicitly allow disabled checkboxes to go up
    if (elType !== "checkbox") {
        if (el.disabled) {
            return null;
        }
    }

    if (elType === "reset" || elType === "button") {
        return null;
    }

    if ((elType === "radio" || elType === "checkbox") && !(el as HTMLInputElement).checked) {
        return null;
    }

    if (elType === "submit" || elType === "image") {
        return null;
    }

    if (el instanceof HTMLSelectElement) {
        if (el.selectedIndex === -1) {
            return null;
        } else {
            const selectedValues: string[] = [];

            Array.prototype.forEach.call(el.options, (op: HTMLOptionElement) => {
                if (op.selected && !op.disabled) {
                    selectedValues.push(op.value);
                }
            });

            if (el.hasAttribute("multiple")) {
                return selectedValues;
            } else {
                return selectedValues[0];
            }
        }
    } else {
        return ("" + $(el).val()).replace(rCRLF, '\r\n');
    }
}
