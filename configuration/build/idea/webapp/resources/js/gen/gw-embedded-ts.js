(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-import-side-effect */
__export(__webpack_require__(1));
__export(__webpack_require__(2));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * =================================
 * PRIMARY CLASS
 * =================================
 * This entire file is a stand alone implementation of the Gw cross origin window messaging system.
 * It's sole purpose is to be used in a cross origin window environment for embedded applications.
 *
 * This Static Class is the only API, and this file relies on no other imports (apart from some TypeScript
 * type definitions, shared with the internal APIs)
 *
 * If the external application plans to support browsers or environments that don't natively support es6 Promise,
 * then it will need a Promise polyfill. GwPromise.ts is one option, and is a stand alone polyfill.
 */
var GwCrossOriginExternal = /** @class */ (function () {
    function GwCrossOriginExternal() {
        throw new Error("Static class. Use GwCrossOriginExternal.init()");
    }
    //==============================================
    //==== INITIALIZATION
    //==============================================
    /**
     * Required Initializer for the GwCrossOriginExternal API.
     * Adds a 'message' event listener to the global window
     * @param {string} originForGwApp - the origin of the window (running the GW Application) that spawned this window
     * @param {Window} forcedOwnerWindow - primarily used for testing and mocking. Replaces all calls to the global window.
     */
    GwCrossOriginExternal.init = function (originForGwApp, allowListedDomains, forcedOwnerWindow) {
        this.ownerWindow = forcedOwnerWindow || window.parent;
        this.allowListedDomains = allowListedDomains;
        this.originForGwApp = originForGwApp;
        this.initialized = true;
        this.messageEventListener = this.receiveMessageFromGwApp.bind(this);
        window.addEventListener("message", this.messageEventListener, false);
    };
    GwCrossOriginExternal.isInitialized = function () {
        return this.initialized;
    };
    /**
     * Disables the API. Removing any setup done in the init method.
     */
    GwCrossOriginExternal.kill = function () {
        this.initialized = false;
        this.originForGwApp = undefined;
        if (this.messageEventListener) {
            this.ownerWindow.removeEventListener("message", this.messageEventListener, false);
            this.messageEventListener = undefined;
        }
    };
    //==============================================
    //==== RECEIVE MESSAGES FROM GW APP
    //==============================================
    GwCrossOriginExternal.throwIfUntrustedOrigin = function (event) {
        if (this.ownerWindow !== event.source || this.originForGwApp !== event.origin) {
            throw new Error("Received untrusted message from origin: " + event.origin);
        }
        if (event.data.gwNonGwOriginIfAny) {
            if (this.allowListedDomains !== "*" && !this.allowListedDomains[event.data.gwNonGwOriginIfAny]) {
                throw new Error("Received message from trusted GW Application origin, but from an originating origin not on the allow list.");
            }
        }
    };
    /**
     * The Primary Router for All Messages Received from the GW Application
     * It is bound the "message" event listener on the parent window.
     *
     * THERE IS NO REASON TO CALL THIS METHOD DIRECTLY
     * @param {GwMessageEvent} event
     */
    GwCrossOriginExternal.receiveMessageFromGwApp = function (event) {
        if (!this.initialized) {
            return;
        }
        this.throwIfUntrustedOrigin(event);
        var data = event.data;
        switch (data.gwMessageType) {
            case 0 /* VALUES */:
                this.receiveValuesMessage(data);
                break;
            case 1 /* RESPONSE_FROM_NON_BLOCKING_SERVER_REQUEST */:
                this.receiveNonBlockingServerRequestReponseMessage(data);
                break;
            case 2 /* CONFIRMATION_ONLY */:
                this.receiveConfirmationOnlyMessage(data);
                break;
            case 3 /* RECEIVE_CROSS_ORIGIN_EVENT */:
                this.receiveCrossOriginEvent(data);
                break;
            case 4 /* RECEIVE_GW_NOTIFICATION */:
                this.receiveGwNotification(data);
                break;
            default:
                this.receiveNonConformingMessageTypeFromGwApp(event);
        }
    };
    /**
     * Helper. Retrieves GwMessageAwaitingResponseInfo while logging errors along the way
     * @param {GwMessageData} data
     * @returns {GwMessageAwaitingResponseInfo<any> | null}
     */
    GwCrossOriginExternal.getAwaitingInfoForCorrespondingMessageData = function (data) {
        var responseToMessageId = data.gwResponseToMessageId;
        if (!responseToMessageId && responseToMessageId !== 0) {
            console.error("Received values payload with no responseToMessageId identifier: ", data);
            return null;
        }
        var info = this.messagesAwaitingResponse[responseToMessageId];
        if (window.GwTestEnv) {
            return info;
        }
        if (!info) {
            console.error("Received values payload with a responseToMessageId: " + responseToMessageId + ". But could not locate a corresponding Promise. Data: ", data);
            return null;
        }
        return info;
    };
    /**
     * Promise Resolver.
     * Takes a GwMessageData object.
     * Locates locally stored promises relating the the message, and fires fulfil or reject based on message status.
     * @param {GwMessageData} data
     */
    GwCrossOriginExternal.receiveMessage = function (data) {
        var payload = data.gwPayload;
        var status = data.gwStatus;
        var info = this.getAwaitingInfoForCorrespondingMessageData(data);
        if (!info) {
            return;
        }
        var callback = (status === 2 /* FAILED */) ? info.reject : info.fulfill;
        if (callback) {
            callback(payload);
        }
    };
    GwCrossOriginExternal.receiveNonBlockingServerRequestReponseMessage = function (data) {
        this.receiveMessage(data);
    };
    GwCrossOriginExternal.receiveValuesMessage = function (data) {
        this.receiveMessage(data);
    };
    GwCrossOriginExternal.receiveConfirmationOnlyMessage = function (data) {
        this.receiveMessage(data);
    };
    GwCrossOriginExternal.receiveCrossOriginEvent = function (data) {
        var ev = data.gwPayload;
        var events = this.crossOriginEventCallbackByBroadcasterThenEvent[ev.broadcasterWindowId];
        if (!events) {
            console.warn("Received cross origin event from a broadcast window not currently being listened to.");
            return;
        }
        var eventListenerCallback = events[ev.eventName] || events["*"];
        if (!eventListenerCallback) {
            console.warn("Received cross origin event for an event type without a registered callback: " + ev.broadcasterWindowId + ":" + ev.eventName);
        }
        eventListenerCallback(ev);
    };
    GwCrossOriginExternal.receiveGwNotification = function (data) {
        var notification = data.gwPayload;
        var callback = this.gwNotificationListeners[notification.type];
        if (callback) {
            callback(notification);
        }
    };
    GwCrossOriginExternal.receiveNonConformingMessageTypeFromGwApp = function (event) {
        var possibleCustomMethodName = this[event.data.gwMessageType];
        if (typeof possibleCustomMethodName === "function") {
            this[possibleCustomMethodName](event);
            return;
        }
        console.warn("--- Received MessageEvent from GwApp without a gwMessageType that matched a method on GwCrossOriginExternal.\n" +
            "--- This is likely an Error.\n" +
            "--- However, receiveNonConformingMessageTypeFromGwApp can be overridden in GwCrossOriginExternal.\n" +
            "--- This allows custom logic based on any MessageEvent that does not implement GwMessageEvent. But consider MessageType.FIRE_CUSTOM_EVENT instead.");
    };
    //==============================================
    //==== SEND MESSAGES TO GW APP
    //==============================================
    /**
     * Private Primary router for all outgoing messages to the Gw Application.
     * @param {GwMessagesToGW} messageType
     * @param payload
     * @param {number | null} responseToMessageId
     * @returns {Promise<any>}
     */
    // tslint:disable-next-line:promise-function-async
    GwCrossOriginExternal.sendMessage = function (messageType, payload, responseToMessageId) {
        if (responseToMessageId === void 0) { responseToMessageId = null; }
        if (!this.ownerWindow) {
            return Promise.reject(new Error("Attempting to send a message to a null GwApp window. Ensure that this window was spawned by a Guidwire Application."));
        }
        var messageId = this.nextMessageId++;
        var data = {
            gwMessageType: messageType,
            gwPayload: payload,
            gwStatus: 3 /* PENDING */,
            gwMessageId: messageId,
            gwResponseToMessageId: responseToMessageId
        };
        var messageAwaitingResponse = {
            messageId: messageId,
            timestamp: window.performance.now()
        };
        this.messagesAwaitingResponse[messageId] = messageAwaitingResponse;
        try {
            var promise = new Promise(function (fulfill, reject) {
                messageAwaitingResponse.fulfill = fulfill;
                messageAwaitingResponse.reject = reject;
            });
            this.ownerWindow.postMessage(data, this.originForGwApp);
            return promise;
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    /**
     * Tells the GW Application to update the DOM Elements (for the widgets whose IDs correspond to the logical name mapping), with new values.
     * NOTE: this does not automatically update server values for the elements. Only the values in the DOM in the GW Application.
     * If the Page is in readonly mode, or the user cancels the changes, the changes will be lost.
     *
     * See: GwCrossOriginExternal.fireActionOnServer, or GwCrossOriginExternal.makeNonBlockingServerRequest for direct
     * communication with the Gw Application Server.
     *
     * The returned promise is only for confirmation that the message was successful
     *
     * @param {GwValueMap} logicalNameToValueMap - 'Logical Names' are exposed as a mapping in EmbeddingWidget API.
     * And correspond to a set of widget IDs in a given instance of the EmbeddingWidget. ie:
     * Logical Name: AddressLine1 => WidgetId-page9-panel8-addresssection7-addressline1.
     * Ligical Name: ZipCode => WidgetId-page9-panel8-addresssection7-zipcode.
     * See the PCF fields for EmbeddingWidget
     * @returns {Promise<GwValueMap>}
     */
    // tslint:disable-next-line:promise-function-async
    GwCrossOriginExternal.setValues = function (logicalNameToValueMap) {
        return this.sendMessage(0 /* SET_VALUES */, logicalNameToValueMap);
    };
    /**
     * Returns the values of the corresponding widgets as currently represented in the DOM.
     * Note: this returns the values as currently represented in the DOM. These values COULD be different
     * from the persisted server values for any number of reasons: the user modified them locally, client reflection
     * modified them, etc.
     *
     * The returned promise will contain the values when fulfilled
     * @param {string[]} logicalNames - 'Logical Names' are exposed as a mapping in EmbeddingWidget API.
     * And correspond to a set of widget IDs in a given instance of the EmbeddingWidget. ie:
     * Logical Name: AddressLine1 => WidgetId-page9-panel8-addresssection7-addressline1.
     * Ligical Name: ZipCode => WidgetId-page9-panel8-addresssection7-zipcode.
     * See the PCF fields for EmbeddingWidget
     * @returns {Promise<GwValueMap>}
     */
    // tslint:disable-next-line:promise-function-async
    GwCrossOriginExternal.getValues = function (logicalNames) {
        return this.sendMessage(1 /* GET_VALUES */, logicalNames);
    };
    /**
     * Calls the Embedded Widget's server side ACTION HANDLER with the given JSON
     * object as its argument. This will cause a full UI refresh.
     *
     * The returned promise is only for confirmation that the message was successful, not the result of the action on the server
     * @param {string} jsonPayload
     * @returns {Promise<any>}
     */
    // tslint:disable-next-line:promise-function-async
    GwCrossOriginExternal.fireActionOnServer = function (payload) {
        return this.sendMessage(2 /* FIRE_ACTION */, payload);
    };
    /**
     * Calls the Embedded Widget's server side UPDATE HANDLER with the given object
     * object as its argument. This will not block or refresh the GW Application UI.
     *
     * NOTE: The Promise returned by this method will contain the payload from this request.
     */
    // tslint:disable-next-line:promise-function-async
    GwCrossOriginExternal.makeNonBlockingServerRequest = function (payload) {
        return this.sendMessage(3 /* NON_BLOCKING_SERVER_REQUEST */, payload);
    };
    /**
     * Subscribe to another External Cross Origin window's messages.
     * Imagine that the Gw Application has 2 embedded iframe's. The Blue Window, and the Red Window.
     * Blue window can broadcast a custom cross origin event. Let's say "GO_BANANAS". And include some information: {numberOfBananas: 12}
     * Blue window will send that package to the GwApplication via broadcastCrossOriginEvent.
     * Red window will never hear about this message.
     *
     * But if Red Window calls addCrossOriginEventListener, passing "redWindow" and "GO_BANANAS" then the Gw Application
     * will route the message event to the blue window, and call the provided callback function.
     *
     * Like get/set values this function uses logical names, as given to the embedded widget via
     * the EmbeddedWidgetRef element. Though in this case the logical names refer to another
     * embedded widget rather than to an input.
     *
     * NOTE: to receive messages from any other external windows, they must be explicitly allow listed via the
     * GwCrossOriginExternal.init method, either by domain, or by specifying a wildcard domain.
     *
     * The returned promise is only for confirmation that the message was successful
     * @param broadcasterWindowName the logical name of the window you want to listen to
     * @param {string} eventName name of the event, or "*" to listen to any event
     * @param {GwEventInfoCallback} callback
     * @returns {Promise<any>}
     */
    // tslint:disable-next-line:promise-function-async
    GwCrossOriginExternal.addCrossOriginEventListener = function (broadcasterWindowName, eventName, callback) {
        var currentlyListenedToEvents = this.crossOriginEventCallbackByBroadcasterThenEvent[broadcasterWindowName] = this.crossOriginEventCallbackByBroadcasterThenEvent[broadcasterWindowName] || {};
        if (currentlyListenedToEvents["*"]) {
            return Promise.reject(new Error("There is already an 'all' listener (`*`) for this broadcaster. Remove it before adding any other listeners: " + broadcasterWindowName + ":" + eventName));
        }
        if (currentlyListenedToEvents[eventName]) {
            return Promise.reject(new Error("Cannot register multiple callbacks for the same broadcaster and event: " + broadcasterWindowName + ":" + eventName));
        }
        if (eventName === "*" && Object.keys(currentlyListenedToEvents).length > 0) {
            console.warn("Adding an 'all' listener of '*' to a broadcaster that already has more specific listener. All specific listeners will be removed. In order to avoid this warning, remove known listeners manually before adding.");
            currentlyListenedToEvents = this.crossOriginEventCallbackByBroadcasterThenEvent[broadcasterWindowName] = {};
        }
        currentlyListenedToEvents[eventName] = callback;
        return this.sendMessage(5 /* ADD_CROSS_ORIGIN_EVENT_LISTENER */, { broadcasterWindowName: broadcasterWindowName, eventName: eventName });
    };
    /**
     * Removes the Cross Origin Event Listener from the GW Application window
     * See GwCrossOriginExternal.addCrossOriginEventListener.
     *
     * Like get/set values this function uses logical names, as given to the embedded widget via
     * the EmbeddedWidgetRef element. Though in this case the logical names refer to another
     * embedded widget rather than to an input.
     *
     * The returned promise is only for confirmation that the message was successful
     * @param broadcasterWindowName the logical name of the window you want to stop listening to
     * @param {string} eventName name of the event, or "*" if registerd to listen to any event
     * @returns {Promise<any>}
     */
    // tslint:disable-next-line:promise-function-async
    GwCrossOriginExternal.removeCrossOriginEventListener = function (broadcasterWindowName, eventName) {
        var byBroadcaster = this.crossOriginEventCallbackByBroadcasterThenEvent[broadcasterWindowName];
        if (byBroadcaster) {
            if (eventName === "*") {
                delete this.crossOriginEventCallbackByBroadcasterThenEvent[broadcasterWindowName];
            }
            else {
                delete byBroadcaster[eventName];
            }
        }
        return this.sendMessage(6 /* REMOVE_CROSS_ORIGIN_EVENT_LISTENER */, { broadcasterWindowName: broadcasterWindowName, eventName: eventName });
    };
    /**
     * Broadcasts a Cross Origin Event (Message) to the GW Application client. The GW Application then routes the message event
     * and information package on to any other embedded windows in the application that are listening to the origin and event name.
     * See GwCrossOriginExternal.addCrossOriginEventListener.
     *
     * @param {string} eventName
     * @returns {Promise<any>}
     */
    // tslint:disable-next-line:promise-function-async
    GwCrossOriginExternal.broadcastCrossOriginEvent = function (eventName, info) {
        if (eventName.length === 0 || eventName === "*") {
            return Promise.reject(new Error("Illegal eventName passed to fireCrossOriginEvent. Cannot be empty or the single `*` character: " + eventName));
        }
        return this.sendMessage(4 /* BROADCAST_CROSS_ORIGIN_EVENT */, { eventName: eventName, info: info });
    };
    /**
     * The Gw Application sends 'events' for some predefined client related notifications, such as the Theme Changing, or the Locale changing.
     * There is also a GENERAL category that exists mainly for future proofing. Additional events may be configured in the future.
     * @param {GwNotificationType} notificationType
     * @param {GwNotificationCallback} callback
     */
    GwCrossOriginExternal.addCallbackForGwNotificationType = function (notificationType, callback) {
        if (this.gwNotificationListeners[notificationType]) {
            throw new Error("Attempting to load multiple callbacks for notification type: " + notificationType + ". call removeCallbackBackForGWNotificationType first.");
        }
        else if (this.gwNotificationListeners["*"]) {
            throw new Error("Attempting to load a notification listener when their is already a * listener. New listener: " + notificationType);
        }
        this.gwNotificationListeners[notificationType] = callback;
    };
    /**
     * The Gw Application sends 'events' for some predefined client related notifications, such as the Theme Changing, or the Locale changing.
     * There is also a GENERAL category that exists mainly for future proofing. Additional events may be configured in the future.
     * @param {GwNotificationType} notificationType
     * @param {GwNotificationCallback} callback
     */
    GwCrossOriginExternal.removeCallbackForGwNotificationType = function (notificationType) {
        if (!this.gwNotificationListeners[notificationType]) {
            console.warn("Attempting to remove a non existent notification listener for: " + notificationType);
        }
        delete this.gwNotificationListeners[notificationType];
    };
    GwCrossOriginExternal.nextMessageId = 1000;
    GwCrossOriginExternal.initialized = false;
    GwCrossOriginExternal.messagesAwaitingResponse = {};
    GwCrossOriginExternal.crossOriginEventCallbackByBroadcasterThenEvent = {};
    GwCrossOriginExternal.gwNotificationListeners = {};
    GwCrossOriginExternal.allowListedDomains = {};
    return GwCrossOriginExternal;
}());
exports.GwCrossOriginExternal = GwCrossOriginExternal;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This file polyfills Promise on the window, if window.Promise is not of type 'function'
 * It's a stand alone file, without any imports, so can also be easily handed off to the embedded application if needed
 */
var GwPromise = /** @class */ (function () {
    function GwPromise(executor) {
        this.subscriberPackages = [];
        this.result = undefined;
        if (executor) {
            try {
                executor(this.beResolved.bind(this), this.beRejected.bind(this));
            }
            catch (e) {
                this.beRejected(e);
            }
        }
    }
    /**
     * From MDN: The static Promise.reject function returns a Promise that is rejected.
     * For debugging purposes and selective error catching, it is useful to make reason an instanceof Error
     * @param reason
     * @returns {GwPromise}
     */
    GwPromise.reject = function (reason) {
        var promise = new GwPromise(null);
        return promise.beRejected(reason);
    };
    /**
     * From MDN: The Promise.resolve(value) method returns a Promise object that is resolved with the given value.
     * If the value is a promise, that promise is returned; if the value is a thenable (i.e. has a "then" method),
     * the returned promise will "follow" that thenable, adopting its eventual state;
     * otherwise the returned promise will be fulfilled with the value.
     *
     * @param value
     * @returns {GwPromise}
     */
    GwPromise.resolve = function (thenableOrValue) {
        if (thenableOrValue instanceof GwPromise) {
            return thenableOrValue;
        }
        var promise = new GwPromise(null);
        return promise.beResolved(thenableOrValue);
    };
    /**
     * From MDN: The Promise.all(iterable) method returns a single Promise that resolves when all of the promises in the iterable argument have resolved
     * or when the iterable argument contains no promises.
     * It rejects with the reason of the first promise that rejects.
     *
     * Returns
     * - An already resolved Promise if the iterable passed is empty or contains no promises.
     * - A pending Promise in all other cases. This returned promise is then resolved/rejected asynchronously (as soon as the stack is empty)
     *   when all the promises in the given iterable have resolved,
     *   or if any of the promises reject.
     *
     * Returned values will be in order of the Promises passed, regardless of completion order.
     */
    GwPromise.all = function (promises) {
        var _this = this;
        if (promises.length === 0) {
            return GwPromise.resolve([]);
        }
        var results = [];
        var remaining = promises.length;
        var asyncMapperFulfill = function (i, value) {
            if (!returnPromise.isPending()) {
                return;
            }
            results[i] = value;
            remaining--;
            if (remaining === 0) {
                returnPromise.beResolved(results);
            }
        };
        var returnPromise = new GwPromise(function (notused, reject) {
            for (var i = 0; i < promises.length; i++) {
                var thenableOrVal = promises[i];
                if (GwPromise.isThenable(thenableOrVal)) {
                    thenableOrVal.then(asyncMapperFulfill.bind(_this, i), reject);
                }
                else {
                    asyncMapperFulfill(i, thenableOrVal);
                }
            }
        });
        return returnPromise;
    };
    /**
     * From MDN: The Promise.race(iterable) method returns a promise
     * that resolves or rejects as soon as one of the promises in the iterable resolves or rejects,
     * with the value or reason from that promise.
     *
     * If the iterable passed is empty, the promise returned will be forever pending.
     *
     * If the iterable contains one or more non-promise value and/or an already resolved/rejected promise,
     * then Promise.race will resolve to the first of these values found in the iterable.
     *
     * @param {GwPromise[]} promises
     * @returns {GwPromise}
     */
    GwPromise.race = function (promises) {
        var executor = function (resolve, reject) {
            for (var i = 0; i < promises.length; i++) {
                var thenableOrValue = promises[i];
                if (GwPromise.isThenable(thenableOrValue)) {
                    thenableOrValue.then(resolve, reject);
                }
                else {
                    resolve(thenableOrValue);
                }
            }
        };
        var returnPromise = new GwPromise(executor);
        return returnPromise;
    };
    /**
     * From MDN: Return A Promise in the pending state.
     * The handler function (onFulfilled or onRejected) then gets called asynchronously (as soon as the stack is empty).
     * After the invocation of the handler function, if the handler function:
     *
     * - returns a value, the promise returned by then gets resolved with the returned value as its value;
     * - throws an error, the promise returned by then gets rejected with the thrown error as its value;
     * - returns an already resolved promise, the promise returned by then gets resolved with that promise's value as its value;
     * - returns an already rejected promise, the promise returned by then gets rejected with that promise's value as its value.
     * - returns another pending promise object, the resolution/rejection of the promise returned by then will be subsequent to the resolution/rejection of the promise returned by the handler.
     *   Also, the value of the promise returned by then will be the same as the value of the promise returned by the handler.
     *
     * @param {GwCallbackOnFulfilled | undefined} onFulfill
     * @param {GwCallbackOnRejected} onReject
     * @returns {GwPromise}
     */
    GwPromise.prototype.then = function (onFulfill, onReject) {
        return this.addSubscriber(false, onFulfill, onReject);
    };
    /**
     * From MDN: The catch() method returns a Promise and deals with rejected cases only.
     * It behaves the same as calling Promise.prototype.then(undefined, onRejected)
     * (in fact, calling obj.catch(onRejected) internally calls obj.then(undefined, onRejected)).
     * @param {GwCallbackOnRejected} onError
     * @returns {GwPromise}
     */
    GwPromise.prototype.catch = function (onError) {
        return this.then(undefined, onError);
    };
    /**
     * From MDN: The finally() method can be useful if you want to do some processing or cleanup once the promise is settled, regardless of its outcome.
     * @param {Function} onFinally
     * @returns {GwPromise}
     */
    GwPromise.prototype.finally = function (onFinally) {
        var callOnFinally = function (val) {
            onFinally();
            return val;
        };
        return this.addSubscriber(true, callOnFinally, callOnFinally);
    };
    GwPromise.prototype.addSubscriber = function (isFinally, onFulfill, onReject) {
        var _this = this;
        var subscriber = new GwPromise(null);
        this.subscriberPackages.push({ subscriber: subscriber, isFinally: isFinally, onFulfill: onFulfill, onReject: onReject });
        if (this.isFulfilled() || this.isRejected()) {
            setTimeout(function () { return _this.notifySubscribers(); });
        }
        return subscriber;
    };
    GwPromise.prototype.notifySubscribers = function () {
        var _this = this;
        var propagateSuccess = this.state !== 2 /* REJECTED */;
        this.subscriberPackages.forEach(function (subscriberPackage) {
            var callback = propagateSuccess ? subscriberPackage.onFulfill : subscriberPackage.onReject;
            var error;
            var finalValue = _this.result;
            if (callback) {
                try {
                    finalValue = callback(_this.result);
                }
                catch (e) {
                    error = e;
                }
            }
            var subscriber = subscriberPackage.subscriber;
            if (error) {
                subscriber.beRejected(error);
            }
            else if (propagateSuccess) {
                subscriber.beResolved(finalValue);
            }
            else {
                subscriber.beRejected(finalValue, false, callback && !subscriberPackage.isFinally);
            }
        });
        this.subscriberPackages.length = 0;
    };
    /**
     * The specs require support for non Promise objects that still support calling .then()
     * @param value
     * @returns {value is IGwThenable}
     */
    GwPromise.isThenable = function (value) {
        return this.isObjectOrFunction(value) && this.isFunction(value.then);
    };
    /**
     * Uses "hidden" private variable to ensure that locking in is a one-way door
     * This is mostly just extra armor to ensure the guts of the promise are functioning correctly.
     */
    GwPromise.prototype.lockIn = function () {
        this._lockedIn = true;
    };
    GwPromise.prototype.isLockedIn = function () {
        return !!this._lockedIn;
    };
    Object.defineProperty(GwPromise.prototype, "state", {
        get: function () {
            return this._state || 0 /* PENDING */;
        },
        /**
         * Uses "hidden" private variable to ensure that setting state can only advance
         * Throws when trying to set state, and the state is already something other than pending
         * This is mostly just extra armor to ensure the guts of the promise are functioning correctly
         * @param {GwPromiseState} state
         */
        set: function (state) {
            if (this.isSettled()) {
                throw new Error("Attempted to set state on a promise that's already been settled.");
            }
            this._state = state;
            this.lockIn();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This method will be called recursively if the value in a thenable.
     * However, this could be called multiple times during a "race". But we only want the first one to proceed.
     * So we tell the promise that it's been "locked in" once this has been called once and we bail on subsequent calls.
     * But if the value is a promise...then it wants to call this recursively...so we give it the "forceToRunEvenIfLocked" option
     *
     * @param thenableOrValue
     * @param {boolean} forceToRunEvenIfLocked
     * @returns {this}
     */
    GwPromise.prototype.beResolved = function (thenableOrValue, forceToRunEvenIfLocked) {
        var _this = this;
        if (forceToRunEvenIfLocked === void 0) { forceToRunEvenIfLocked = false; }
        if (thenableOrValue === this) {
            throw new Error("Cannot resolve a promise with itself.");
        }
        //Unless the chain of resolution has called this method with "forceToRunEvenIfLocked" then bail if locked
        if (!forceToRunEvenIfLocked && this.isLockedIn()) {
            return this;
        }
        // Always bail if we're already settled
        if (this.isSettled()) {
            return this;
        }
        this.lockIn();
        if (GwPromise.isThenable(thenableOrValue)) {
            thenableOrValue.then(function (val) { return _this.beResolved(val, true); }, function (val) { return _this.beRejected(val, true); });
            return this;
        }
        this.state = 1 /* FULFILLED */;
        this.result = thenableOrValue;
        this.notifySubscribers();
        return this;
    };
    GwPromise.prototype.beRejected = function (reason, forceToRunEvenIfLocked, rejectionWasHandled) {
        if (forceToRunEvenIfLocked === void 0) { forceToRunEvenIfLocked = false; }
        if (rejectionWasHandled === void 0) { rejectionWasHandled = false; }
        if (reason === this) {
            throw new Error("Cannot resolve a promise with itself.");
        }
        //Unless the chain of resolution has called this method with "forceToRunEvenIfLocked" then bail if locked
        if (!forceToRunEvenIfLocked && this.isLockedIn()) {
            return this;
        }
        // Always bail if we're already settled
        if (this.isSettled()) {
            return this;
        }
        this.lockIn();
        this.state = rejectionWasHandled ? 3 /* REJECTED_BUT_HANDLED */ : 2 /* REJECTED */;
        this.result = reason;
        this.notifySubscribers();
        return this;
    };
    GwPromise.prototype.getResult = function () {
        return this.result;
    };
    GwPromise.prototype.isSettled = function () {
        return this.isFulfilled() || this.isRejected();
    };
    GwPromise.prototype.isPending = function () {
        return this.state === 0 /* PENDING */;
    };
    GwPromise.prototype.isFulfilled = function () {
        return this.state === 1 /* FULFILLED */;
    };
    GwPromise.prototype.isRejected = function () {
        return this.state === 2 /* REJECTED */ || this.state === 3 /* REJECTED_BUT_HANDLED */;
    };
    GwPromise.isObjectOrFunction = function (val) {
        if (val === null || val === undefined) {
            return false;
        }
        var type = typeof val;
        return val !== null && (type === "object" || type === "function");
    };
    GwPromise.isFunction = function (val) {
        return typeof val === "function";
    };
    return GwPromise;
}());
exports.GwPromise = GwPromise;
// Polyfill
if (window && typeof window.Promise !== "function") {
    window.Promise = GwPromise;
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiZGFhNzMyYzY2MDNlZjI3NWY5ZCIsIndlYnBhY2s6Ly8vLi90cy9lbWJlZGRlZC1pbmRleC50cyIsIndlYnBhY2s6Ly8vLi90cy9lbWJlZGRlZC9Hd0Nyb3NzT3JpZ2luRXh0ZXJuYWwudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZW1iZWRkZWQvR3dQcm9taXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3REEsMENBQTBDO0FBQzFDLGlDQUFpRDtBQUNqRCxpQ0FBcUM7Ozs7Ozs7Ozs7QUNZckM7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0g7SUFZRTtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsZ0RBQWdEO0lBQ2hELHFCQUFxQjtJQUNyQixnREFBZ0Q7SUFFaEQ7Ozs7O09BS0c7SUFDSSwwQkFBSSxHQUFYLFVBQWEsY0FBc0IsRUFBRSxrQkFBMEMsRUFBRSxpQkFBMEI7UUFD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QUM7QUFBRCxDQUFDO0FBblZZLDhCQUFTO0FBcVZ0QixXQUFXO0FBQ1gsRUFBRSxDQUFDLENBQUMsTUFBTSxJQUFJLE9BQVEsTUFBYyxDQUFDLE9BQU8sS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzNELE1BQWMsQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0FBQ3RDLENBQUMiLCJmaWxlIjoiZ3ctZW1iZWRkZWQtdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiZGFhNzMyYzY2MDNlZjI3NWY5ZCIsIi8qIHRzbGludDpkaXNhYmxlOm5vLWltcG9ydC1zaWRlLWVmZmVjdCAqL1xuZXhwb3J0ICogZnJvbSBcIi4vZW1iZWRkZWQvR3dDcm9zc09yaWdpbkV4dGVybmFsXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9lbWJlZGRlZC9Hd1Byb21pc2VcIjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90cy9lbWJlZGRlZC1pbmRleC50cyIsImltcG9ydCB7R3dFdmVudExpc3RlbmVyLCBHd1R5cGVkTWFwfSBmcm9tIFwiLi4vdHlwZXMvZ3dUeXBlc1wiO1xyXG5pbXBvcnQge1xyXG4gIEd3Q3Jvc3NPcmlnaW5FdmVudCwgR3dDcm9zc09yaWdpbkV2ZW50TGlzdGVuZXJDYWxsYmFjaywgR3dDcm9zc09yaWdpbkV2ZW50TmFtZSwgR3dDcm9zc09yaWdpbldpbmRvd05hbWUsXHJcbiAgR3dLZXlWYWx1ZSwgR3dNZXNzYWdlRGF0YSwgR3dNZXNzYWdlRXZlbnQsIEd3TWVzc2FnZXNGcm9tR1csIEd3TWVzc2FnZVN0YXR1cyxcclxuICBHd01lc3NhZ2VzVG9HVywgR3dOb3RpZmljYXRpb24sIEd3Tm90aWZpY2F0aW9uQ2FsbGJhY2ssIEd3Tm90aWZpY2F0aW9uVHlwZVxyXG59IGZyb20gXCIuLi90eXBlcy9nd0Nyb3NzT3JpZ2luVHlwZXNcIjtcclxuXHJcbmludGVyZmFjZSBHd01lc3NhZ2VBd2FpdGluZ1Jlc3BvbnNlSW5mbyB7XHJcbiAgbWVzc2FnZUlkOiBudW1iZXI7XHJcbiAgZnVsZmlsbD86IEZ1bmN0aW9uO1xyXG4gIHJlamVjdD86IEZ1bmN0aW9uO1xyXG4gIHRpbWVzdGFtcDogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAqIFBSSU1BUlkgQ0xBU1NcclxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAqIFRoaXMgZW50aXJlIGZpbGUgaXMgYSBzdGFuZCBhbG9uZSBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgR3cgY3Jvc3Mgb3JpZ2luIHdpbmRvdyBtZXNzYWdpbmcgc3lzdGVtLlxyXG4gKiBJdCdzIHNvbGUgcHVycG9zZSBpcyB0byBiZSB1c2VkIGluIGEgY3Jvc3Mgb3JpZ2luIHdpbmRvdyBlbnZpcm9ubWVudCBmb3IgZW1iZWRkZWQgYXBwbGljYXRpb25zLlxyXG4gKlxyXG4gKiBUaGlzIFN0YXRpYyBDbGFzcyBpcyB0aGUgb25seSBBUEksIGFuZCB0aGlzIGZpbGUgcmVsaWVzIG9uIG5vIG90aGVyIGltcG9ydHMgKGFwYXJ0IGZyb20gc29tZSBUeXBlU2NyaXB0XHJcbiAqIHR5cGUgZGVmaW5pdGlvbnMsIHNoYXJlZCB3aXRoIHRoZSBpbnRlcm5hbCBBUElzKVxyXG4gKlxyXG4gKiBJZiB0aGUgZXh0ZXJuYWwgYXBwbGljYXRpb24gcGxhbnMgdG8gc3VwcG9ydCBicm93c2VycyBvciBlbnZpcm9ubWVudHMgdGhhdCBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGVzNiBQcm9taXNlLFxyXG4gKiB0aGVuIGl0IHdpbGwgbmVlZCBhIFByb21pc2UgcG9seWZpbGwuIEd3UHJvbWlzZS50cyBpcyBvbmUgb3B0aW9uLCBhbmQgaXMgYSBzdGFuZCBhbG9uZSBwb2x5ZmlsbC5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHd0Nyb3NzT3JpZ2luRXh0ZXJuYWwge1xyXG4gIHByaXZhdGUgc3RhdGljIG5leHRNZXNzYWdlSWQ6IG51bWJlciA9IDEwMDA7XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGluaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgb3JpZ2luRm9yR3dBcHA6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBtZXNzYWdlc0F3YWl0aW5nUmVzcG9uc2U6IEd3S2V5VmFsdWU8R3dNZXNzYWdlQXdhaXRpbmdSZXNwb25zZUluZm8+ID0ge307XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgY3Jvc3NPcmlnaW5FdmVudENhbGxiYWNrQnlCcm9hZGNhc3RlclRoZW5FdmVudDogR3dLZXlWYWx1ZTxHd0tleVZhbHVlPEd3Q3Jvc3NPcmlnaW5FdmVudExpc3RlbmVyQ2FsbGJhY2s+PiA9IHt9O1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IGd3Tm90aWZpY2F0aW9uTGlzdGVuZXJzOiBHd0tleVZhbHVlPEd3Tm90aWZpY2F0aW9uQ2FsbGJhY2s+ID0ge307XHJcbiAgcHJpdmF0ZSBzdGF0aWMgYWxsb3dMaXN0ZWREb21haW5zOiBHd0tleVZhbHVlPHRydWU+IHwgXCIqXCIgPSB7fTtcclxuICBwcml2YXRlIHN0YXRpYyBvd25lcldpbmRvdzogV2luZG93O1xyXG4gIHByaXZhdGUgc3RhdGljIG1lc3NhZ2VFdmVudExpc3RlbmVyOiBHd0V2ZW50TGlzdGVuZXIgfCB1bmRlZmluZWQ7XHJcblxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IgKCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU3RhdGljIGNsYXNzLiBVc2UgR3dDcm9zc09yaWdpbkV4dGVybmFsLmluaXQoKVwiKTtcclxuICB9XHJcblxyXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vPT09PSBJTklUSUFMSVpBVElPTlxyXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAvKipcclxuICAgKiBSZXF1aXJlZCBJbml0aWFsaXplciBmb3IgdGhlIEd3Q3Jvc3NPcmlnaW5FeHRlcm5hbCBBUEkuXHJcbiAgICogQWRkcyBhICdtZXNzYWdlJyBldmVudCBsaXN0ZW5lciB0byB0aGUgZ2xvYmFsIHdpbmRvd1xyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcmlnaW5Gb3JHd0FwcCAtIHRoZSBvcmlnaW4gb2YgdGhlIHdpbmRvdyAocnVubmluZyB0aGUgR1cgQXBwbGljYXRpb24pIHRoYXQgc3Bhd25lZCB0aGlzIHdpbmRvd1xyXG4gICAqIEBwYXJhbSB7V2luZG93fSBmb3JjZWRPd25lcldpbmRvdyAtIHByaW1hcmlseSB1c2VkIGZvciB0ZXN0aW5nIGFuZCBtb2NraW5nLiBSZXBsYWNlcyBhbGwgY2FsbHMgdG8gdGhlIGdsb2JhbCB3aW5kb3cuXHJcbiAgICovXHJcbiAgc3RhdGljIGluaXQgKG9yaWdpbkZvckd3QXBwOiBzdHJpbmcsIGFsbG93TGlzdGVkRG9tYWluczogR3dLZXlWYWx1ZTx0cnVlPiB8IFwiKlwiLCBmb3JjZWRPd25lcldpbmRvdz86IFdpbmRvdyk6IHZvaWQge1xyXG4gICAgdGhpcy5vd25lcldpbmRvdyA9IGZvcmNlZE93bmVyV2luZG93IHx8IHdpbmRvdy5wYXJlbnQ7XHJcbiAgICB0aGlzLmFsbG93TGlzdGVkRG9tYWlucyA9IGFsbG93TGlzdGVkRG9tYWlucztcclxuICAgIHRoaXMub3JpZ2luRm9yR3dBcHAgPSBvcmlnaW5Gb3JHd0FwcDtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5tZXNzYWdlRXZlbnRMaXN0ZW5lciA9IHRoaXMucmVjZWl2ZU1lc3NhZ2VGcm9tR3dBcHAuYmluZCh0aGlzKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLm1lc3NhZ2VFdmVudExpc3RlbmVyISwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGlzSW5pdGlhbGl6ZWQgKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5pdGlhbGl6ZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEaXNhYmxlcyB0aGUgQVBJLiBSZW1vdmluZyBhbnkgc2V0dXAgZG9uZSBpbiB0aGUgaW5pdCBtZXRob2QuXHJcbiAgICovXHJcbiAgc3RhdGljIGtpbGwgKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5vcmlnaW5Gb3JHd0FwcCA9IHVuZGVmaW5lZDtcclxuICAgIGlmICh0aGlzLm1lc3NhZ2VFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgIHRoaXMub3duZXJXaW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5tZXNzYWdlRXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xyXG4gICAgICB0aGlzLm1lc3NhZ2VFdmVudExpc3RlbmVyID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy89PT09IFJFQ0VJVkUgTUVTU0FHRVMgRlJPTSBHVyBBUFBcclxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgdGhyb3dJZlVudHJ1c3RlZE9yaWdpbiAoZXZlbnQ6IEd3TWVzc2FnZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vd25lcldpbmRvdyAhPT0gZXZlbnQuc291cmNlIHx8IHRoaXMub3JpZ2luRm9yR3dBcHAgIT09IGV2ZW50Lm9yaWdpbikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWNlaXZlZCB1bnRydXN0ZWQgbWVzc2FnZSBmcm9tIG9yaWdpbjogXCIgKyBldmVudC5vcmlnaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChldmVudC5kYXRhLmd3Tm9uR3dPcmlnaW5JZkFueSkge1xyXG4gICAgICBpZiAodGhpcy5hbGxvd0xpc3RlZERvbWFpbnMgIT09IFwiKlwiICYmICF0aGlzLmFsbG93TGlzdGVkRG9tYWluc1tldmVudC5kYXRhLmd3Tm9uR3dPcmlnaW5JZkFueV0pIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWNlaXZlZCBtZXNzYWdlIGZyb20gdHJ1c3RlZCBHVyBBcHBsaWNhdGlvbiBvcmlnaW4sIGJ1dCBmcm9tIGFuIG9yaWdpbmF0aW5nIG9yaWdpbiBub3Qgb24gdGhlIGFsbG93IGxpc3QuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgUHJpbWFyeSBSb3V0ZXIgZm9yIEFsbCBNZXNzYWdlcyBSZWNlaXZlZCBmcm9tIHRoZSBHVyBBcHBsaWNhdGlvblxyXG4gICAqIEl0IGlzIGJvdW5kIHRoZSBcIm1lc3NhZ2VcIiBldmVudCBsaXN0ZW5lciBvbiB0aGUgcGFyZW50IHdpbmRvdy5cclxuICAgKlxyXG4gICAqIFRIRVJFIElTIE5PIFJFQVNPTiBUTyBDQUxMIFRISVMgTUVUSE9EIERJUkVDVExZXHJcbiAgICogQHBhcmFtIHtHd01lc3NhZ2VFdmVudH0gZXZlbnRcclxuICAgKi9cclxuICBzdGF0aWMgcmVjZWl2ZU1lc3NhZ2VGcm9tR3dBcHAgKGV2ZW50OiBHd01lc3NhZ2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRocm93SWZVbnRydXN0ZWRPcmlnaW4oZXZlbnQpO1xyXG5cclxuICAgIGNvbnN0IGRhdGE6IEd3TWVzc2FnZURhdGEgPSBldmVudC5kYXRhO1xyXG5cclxuICAgIHN3aXRjaCAoZGF0YS5nd01lc3NhZ2VUeXBlKSB7XHJcbiAgICAgIGNhc2UgR3dNZXNzYWdlc0Zyb21HVy5WQUxVRVM6XHJcbiAgICAgICAgdGhpcy5yZWNlaXZlVmFsdWVzTWVzc2FnZShkYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBHd01lc3NhZ2VzRnJvbUdXLlJFU1BPTlNFX0ZST01fTk9OX0JMT0NLSU5HX1NFUlZFUl9SRVFVRVNUOlxyXG4gICAgICAgIHRoaXMucmVjZWl2ZU5vbkJsb2NraW5nU2VydmVyUmVxdWVzdFJlcG9uc2VNZXNzYWdlKGRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEd3TWVzc2FnZXNGcm9tR1cuQ09ORklSTUFUSU9OX09OTFk6XHJcbiAgICAgICAgdGhpcy5yZWNlaXZlQ29uZmlybWF0aW9uT25seU1lc3NhZ2UoZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgR3dNZXNzYWdlc0Zyb21HVy5SRUNFSVZFX0NST1NTX09SSUdJTl9FVkVOVDpcclxuICAgICAgICB0aGlzLnJlY2VpdmVDcm9zc09yaWdpbkV2ZW50KGRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEd3TWVzc2FnZXNGcm9tR1cuUkVDRUlWRV9HV19OT1RJRklDQVRJT046XHJcbiAgICAgICAgdGhpcy5yZWNlaXZlR3dOb3RpZmljYXRpb24oZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhpcy5yZWNlaXZlTm9uQ29uZm9ybWluZ01lc3NhZ2VUeXBlRnJvbUd3QXBwKGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhlbHBlci4gUmV0cmlldmVzIEd3TWVzc2FnZUF3YWl0aW5nUmVzcG9uc2VJbmZvIHdoaWxlIGxvZ2dpbmcgZXJyb3JzIGFsb25nIHRoZSB3YXlcclxuICAgKiBAcGFyYW0ge0d3TWVzc2FnZURhdGF9IGRhdGFcclxuICAgKiBAcmV0dXJucyB7R3dNZXNzYWdlQXdhaXRpbmdSZXNwb25zZUluZm88YW55PiB8IG51bGx9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0QXdhaXRpbmdJbmZvRm9yQ29ycmVzcG9uZGluZ01lc3NhZ2VEYXRhIChkYXRhOiBHd01lc3NhZ2VEYXRhKTogR3dNZXNzYWdlQXdhaXRpbmdSZXNwb25zZUluZm8gfCBudWxsIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlVG9NZXNzYWdlSWQgPSBkYXRhLmd3UmVzcG9uc2VUb01lc3NhZ2VJZDtcclxuXHJcbiAgICBpZiAoIXJlc3BvbnNlVG9NZXNzYWdlSWQgJiYgcmVzcG9uc2VUb01lc3NhZ2VJZCAhPT0gMCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiUmVjZWl2ZWQgdmFsdWVzIHBheWxvYWQgd2l0aCBubyByZXNwb25zZVRvTWVzc2FnZUlkIGlkZW50aWZpZXI6IFwiLCBkYXRhKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5mbzogR3dNZXNzYWdlQXdhaXRpbmdSZXNwb25zZUluZm8gPSB0aGlzLm1lc3NhZ2VzQXdhaXRpbmdSZXNwb25zZVtyZXNwb25zZVRvTWVzc2FnZUlkXTtcclxuXHJcbiAgICBpZiAoKHdpbmRvdyBhcyBhbnkpLkd3VGVzdEVudikge1xyXG4gICAgICByZXR1cm4gaW5mbztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWluZm8pIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIlJlY2VpdmVkIHZhbHVlcyBwYXlsb2FkIHdpdGggYSByZXNwb25zZVRvTWVzc2FnZUlkOiBcIiArIHJlc3BvbnNlVG9NZXNzYWdlSWQgKyBcIi4gQnV0IGNvdWxkIG5vdCBsb2NhdGUgYSBjb3JyZXNwb25kaW5nIFByb21pc2UuIERhdGE6IFwiLCBkYXRhKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluZm87XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQcm9taXNlIFJlc29sdmVyLlxyXG4gICAqIFRha2VzIGEgR3dNZXNzYWdlRGF0YSBvYmplY3QuXHJcbiAgICogTG9jYXRlcyBsb2NhbGx5IHN0b3JlZCBwcm9taXNlcyByZWxhdGluZyB0aGUgdGhlIG1lc3NhZ2UsIGFuZCBmaXJlcyBmdWxmaWwgb3IgcmVqZWN0IGJhc2VkIG9uIG1lc3NhZ2Ugc3RhdHVzLlxyXG4gICAqIEBwYXJhbSB7R3dNZXNzYWdlRGF0YX0gZGF0YVxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3RhdGljIHJlY2VpdmVNZXNzYWdlIChkYXRhOiBHd01lc3NhZ2VEYXRhKTogdm9pZCB7XHJcbiAgICBjb25zdCBwYXlsb2FkOiBHd0tleVZhbHVlPGFueT4gfCBFcnJvciB8IG51bGwgPSBkYXRhLmd3UGF5bG9hZDtcclxuICAgIGNvbnN0IHN0YXR1czogR3dNZXNzYWdlU3RhdHVzID0gZGF0YS5nd1N0YXR1cztcclxuXHJcbiAgICBjb25zdCBpbmZvOiBHd01lc3NhZ2VBd2FpdGluZ1Jlc3BvbnNlSW5mbyB8IG51bGwgPSB0aGlzLmdldEF3YWl0aW5nSW5mb0ZvckNvcnJlc3BvbmRpbmdNZXNzYWdlRGF0YShkYXRhKTtcclxuICAgIGlmICghaW5mbykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FsbGJhY2sgPSAoc3RhdHVzID09PSBHd01lc3NhZ2VTdGF0dXMuRkFJTEVEKSA/IGluZm8ucmVqZWN0IDogaW5mby5mdWxmaWxsO1xyXG4gICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgIGNhbGxiYWNrKHBheWxvYWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVjZWl2ZU5vbkJsb2NraW5nU2VydmVyUmVxdWVzdFJlcG9uc2VNZXNzYWdlIChkYXRhOiBHd01lc3NhZ2VEYXRhKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlY2VpdmVNZXNzYWdlKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVjZWl2ZVZhbHVlc01lc3NhZ2UgKGRhdGE6IEd3TWVzc2FnZURhdGEpOiB2b2lkIHtcclxuICAgIHRoaXMucmVjZWl2ZU1lc3NhZ2UoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyByZWNlaXZlQ29uZmlybWF0aW9uT25seU1lc3NhZ2UgKGRhdGE6IEd3TWVzc2FnZURhdGEpOiB2b2lkIHtcclxuICAgIHRoaXMucmVjZWl2ZU1lc3NhZ2UoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyByZWNlaXZlQ3Jvc3NPcmlnaW5FdmVudCAoZGF0YTogR3dNZXNzYWdlRGF0YSk6IHZvaWQge1xyXG4gICAgY29uc3QgZXY6IEd3Q3Jvc3NPcmlnaW5FdmVudCA9IGRhdGEuZ3dQYXlsb2FkO1xyXG5cclxuICAgIGNvbnN0IGV2ZW50czogR3dUeXBlZE1hcDxHd0Nyb3NzT3JpZ2luRXZlbnRMaXN0ZW5lckNhbGxiYWNrPiA9IHRoaXMuY3Jvc3NPcmlnaW5FdmVudENhbGxiYWNrQnlCcm9hZGNhc3RlclRoZW5FdmVudFtldi5icm9hZGNhc3RlcldpbmRvd0lkXTtcclxuXHJcbiAgICBpZiAoIWV2ZW50cykge1xyXG4gICAgICBjb25zb2xlLndhcm4oXCJSZWNlaXZlZCBjcm9zcyBvcmlnaW4gZXZlbnQgZnJvbSBhIGJyb2FkY2FzdCB3aW5kb3cgbm90IGN1cnJlbnRseSBiZWluZyBsaXN0ZW5lZCB0by5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBldmVudExpc3RlbmVyQ2FsbGJhY2sgPSBldmVudHNbZXYuZXZlbnROYW1lXSB8fCBldmVudHNbXCIqXCJdO1xyXG5cclxuICAgIGlmICghZXZlbnRMaXN0ZW5lckNhbGxiYWNrKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIlJlY2VpdmVkIGNyb3NzIG9yaWdpbiBldmVudCBmb3IgYW4gZXZlbnQgdHlwZSB3aXRob3V0IGEgcmVnaXN0ZXJlZCBjYWxsYmFjazogXCIgKyBldi5icm9hZGNhc3RlcldpbmRvd0lkICsgXCI6XCIgKyBldi5ldmVudE5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50TGlzdGVuZXJDYWxsYmFjayhldik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyByZWNlaXZlR3dOb3RpZmljYXRpb24gKGRhdGE6IEd3TWVzc2FnZURhdGEpOiB2b2lkIHtcclxuICAgIGNvbnN0IG5vdGlmaWNhdGlvbjogR3dOb3RpZmljYXRpb24gPSBkYXRhLmd3UGF5bG9hZDtcclxuXHJcbiAgICBjb25zdCBjYWxsYmFjazogR3dOb3RpZmljYXRpb25DYWxsYmFjayA9IHRoaXMuZ3dOb3RpZmljYXRpb25MaXN0ZW5lcnNbbm90aWZpY2F0aW9uLnR5cGVdO1xyXG4gICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgIGNhbGxiYWNrKG5vdGlmaWNhdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyByZWNlaXZlTm9uQ29uZm9ybWluZ01lc3NhZ2VUeXBlRnJvbUd3QXBwIChldmVudDogTWVzc2FnZUV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBwb3NzaWJsZUN1c3RvbU1ldGhvZE5hbWUgPSAodGhpcyBhcyBhbnkpW2V2ZW50LmRhdGEuZ3dNZXNzYWdlVHlwZV07XHJcblxyXG4gICAgaWYgKHR5cGVvZiBwb3NzaWJsZUN1c3RvbU1ldGhvZE5hbWUgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAodGhpcyBhcyBhbnkpW3Bvc3NpYmxlQ3VzdG9tTWV0aG9kTmFtZV0oZXZlbnQpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIFwiLS0tIFJlY2VpdmVkIE1lc3NhZ2VFdmVudCBmcm9tIEd3QXBwIHdpdGhvdXQgYSBnd01lc3NhZ2VUeXBlIHRoYXQgbWF0Y2hlZCBhIG1ldGhvZCBvbiBHd0Nyb3NzT3JpZ2luRXh0ZXJuYWwuXFxuXCIgK1xyXG4gICAgICAgIFwiLS0tIFRoaXMgaXMgbGlrZWx5IGFuIEVycm9yLlxcblwiICtcclxuICAgICAgICBcIi0tLSBIb3dldmVyLCByZWNlaXZlTm9uQ29uZm9ybWluZ01lc3NhZ2VUeXBlRnJvbUd3QXBwIGNhbiBiZSBvdmVycmlkZGVuIGluIEd3Q3Jvc3NPcmlnaW5FeHRlcm5hbC5cXG5cIiArXHJcbiAgICAgICAgXCItLS0gVGhpcyBhbGxvd3MgY3VzdG9tIGxvZ2ljIGJhc2VkIG9uIGFueSBNZXNzYWdlRXZlbnQgdGhhdCBkb2VzIG5vdCBpbXBsZW1lbnQgR3dNZXNzYWdlRXZlbnQuIEJ1dCBjb25zaWRlciBNZXNzYWdlVHlwZS5GSVJFX0NVU1RPTV9FVkVOVCBpbnN0ZWFkLlwiXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy89PT09IFNFTkQgTUVTU0FHRVMgVE8gR1cgQVBQXHJcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gIC8qKlxyXG4gICAqIFByaXZhdGUgUHJpbWFyeSByb3V0ZXIgZm9yIGFsbCBvdXRnb2luZyBtZXNzYWdlcyB0byB0aGUgR3cgQXBwbGljYXRpb24uXHJcbiAgICogQHBhcmFtIHtHd01lc3NhZ2VzVG9HV30gbWVzc2FnZVR5cGVcclxuICAgKiBAcGFyYW0gcGF5bG9hZFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyIHwgbnVsbH0gcmVzcG9uc2VUb01lc3NhZ2VJZFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByb21pc2UtZnVuY3Rpb24tYXN5bmNcclxuICBwcml2YXRlIHN0YXRpYyBzZW5kTWVzc2FnZSAobWVzc2FnZVR5cGU6IEd3TWVzc2FnZXNUb0dXLCBwYXlsb2FkOiBhbnksIHJlc3BvbnNlVG9NZXNzYWdlSWQ6IG51bWJlciB8IG51bGwgPSBudWxsKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGlmICghdGhpcy5vd25lcldpbmRvdykge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQXR0ZW1wdGluZyB0byBzZW5kIGEgbWVzc2FnZSB0byBhIG51bGwgR3dBcHAgd2luZG93LiBFbnN1cmUgdGhhdCB0aGlzIHdpbmRvdyB3YXMgc3Bhd25lZCBieSBhIEd1aWR3aXJlIEFwcGxpY2F0aW9uLlwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWVzc2FnZUlkID0gdGhpcy5uZXh0TWVzc2FnZUlkKys7XHJcblxyXG4gICAgY29uc3QgZGF0YTogR3dNZXNzYWdlRGF0YSA9IHtcclxuICAgICAgZ3dNZXNzYWdlVHlwZTogbWVzc2FnZVR5cGUsXHJcbiAgICAgIGd3UGF5bG9hZDogcGF5bG9hZCxcclxuICAgICAgZ3dTdGF0dXM6IEd3TWVzc2FnZVN0YXR1cy5QRU5ESU5HLFxyXG4gICAgICBnd01lc3NhZ2VJZDogbWVzc2FnZUlkLFxyXG4gICAgICBnd1Jlc3BvbnNlVG9NZXNzYWdlSWQ6IHJlc3BvbnNlVG9NZXNzYWdlSWRcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbWVzc2FnZUF3YWl0aW5nUmVzcG9uc2U6IEd3TWVzc2FnZUF3YWl0aW5nUmVzcG9uc2VJbmZvID0ge1xyXG4gICAgICBtZXNzYWdlSWQsXHJcbiAgICAgIHRpbWVzdGFtcDogd2luZG93LnBlcmZvcm1hbmNlLm5vdygpXHJcbiAgICB9O1xyXG4gICAgdGhpcy5tZXNzYWdlc0F3YWl0aW5nUmVzcG9uc2VbbWVzc2FnZUlkXSA9IG1lc3NhZ2VBd2FpdGluZ1Jlc3BvbnNlO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgoZnVsZmlsbCwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZUF3YWl0aW5nUmVzcG9uc2UuZnVsZmlsbCA9IGZ1bGZpbGw7XHJcbiAgICAgICAgbWVzc2FnZUF3YWl0aW5nUmVzcG9uc2UucmVqZWN0ID0gcmVqZWN0O1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5vd25lcldpbmRvdy5wb3N0TWVzc2FnZShkYXRhLCB0aGlzLm9yaWdpbkZvckd3QXBwISk7XHJcbiAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUZWxscyB0aGUgR1cgQXBwbGljYXRpb24gdG8gdXBkYXRlIHRoZSBET00gRWxlbWVudHMgKGZvciB0aGUgd2lkZ2V0cyB3aG9zZSBJRHMgY29ycmVzcG9uZCB0byB0aGUgbG9naWNhbCBuYW1lIG1hcHBpbmcpLCB3aXRoIG5ldyB2YWx1ZXMuXHJcbiAgICogTk9URTogdGhpcyBkb2VzIG5vdCBhdXRvbWF0aWNhbGx5IHVwZGF0ZSBzZXJ2ZXIgdmFsdWVzIGZvciB0aGUgZWxlbWVudHMuIE9ubHkgdGhlIHZhbHVlcyBpbiB0aGUgRE9NIGluIHRoZSBHVyBBcHBsaWNhdGlvbi5cclxuICAgKiBJZiB0aGUgUGFnZSBpcyBpbiByZWFkb25seSBtb2RlLCBvciB0aGUgdXNlciBjYW5jZWxzIHRoZSBjaGFuZ2VzLCB0aGUgY2hhbmdlcyB3aWxsIGJlIGxvc3QuXHJcbiAgICpcclxuICAgKiBTZWU6IEd3Q3Jvc3NPcmlnaW5FeHRlcm5hbC5maXJlQWN0aW9uT25TZXJ2ZXIsIG9yIEd3Q3Jvc3NPcmlnaW5FeHRlcm5hbC5tYWtlTm9uQmxvY2tpbmdTZXJ2ZXJSZXF1ZXN0IGZvciBkaXJlY3RcclxuICAgKiBjb21tdW5pY2F0aW9uIHdpdGggdGhlIEd3IEFwcGxpY2F0aW9uIFNlcnZlci5cclxuICAgKlxyXG4gICAqIFRoZSByZXR1cm5lZCBwcm9taXNlIGlzIG9ubHkgZm9yIGNvbmZpcm1hdGlvbiB0aGF0IHRoZSBtZXNzYWdlIHdhcyBzdWNjZXNzZnVsXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0d3VmFsdWVNYXB9IGxvZ2ljYWxOYW1lVG9WYWx1ZU1hcCAtICdMb2dpY2FsIE5hbWVzJyBhcmUgZXhwb3NlZCBhcyBhIG1hcHBpbmcgaW4gRW1iZWRkaW5nV2lkZ2V0IEFQSS5cclxuICAgKiBBbmQgY29ycmVzcG9uZCB0byBhIHNldCBvZiB3aWRnZXQgSURzIGluIGEgZ2l2ZW4gaW5zdGFuY2Ugb2YgdGhlIEVtYmVkZGluZ1dpZGdldC4gaWU6XHJcbiAgICogTG9naWNhbCBOYW1lOiBBZGRyZXNzTGluZTEgPT4gV2lkZ2V0SWQtcGFnZTktcGFuZWw4LWFkZHJlc3NzZWN0aW9uNy1hZGRyZXNzbGluZTEuXHJcbiAgICogTGlnaWNhbCBOYW1lOiBaaXBDb2RlID0+IFdpZGdldElkLXBhZ2U5LXBhbmVsOC1hZGRyZXNzc2VjdGlvbjctemlwY29kZS5cclxuICAgKiBTZWUgdGhlIFBDRiBmaWVsZHMgZm9yIEVtYmVkZGluZ1dpZGdldFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEd3VmFsdWVNYXA+fVxyXG4gICAqL1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcm9taXNlLWZ1bmN0aW9uLWFzeW5jXHJcbiAgc3RhdGljIHNldFZhbHVlcyAobG9naWNhbE5hbWVUb1ZhbHVlTWFwOiBHd0tleVZhbHVlPHN0cmluZz4pOiBQcm9taXNlPEd3S2V5VmFsdWU8c3RyaW5nPj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VuZE1lc3NhZ2UoR3dNZXNzYWdlc1RvR1cuU0VUX1ZBTFVFUywgbG9naWNhbE5hbWVUb1ZhbHVlTWFwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIHZhbHVlcyBvZiB0aGUgY29ycmVzcG9uZGluZyB3aWRnZXRzIGFzIGN1cnJlbnRseSByZXByZXNlbnRlZCBpbiB0aGUgRE9NLlxyXG4gICAqIE5vdGU6IHRoaXMgcmV0dXJucyB0aGUgdmFsdWVzIGFzIGN1cnJlbnRseSByZXByZXNlbnRlZCBpbiB0aGUgRE9NLiBUaGVzZSB2YWx1ZXMgQ09VTEQgYmUgZGlmZmVyZW50XHJcbiAgICogZnJvbSB0aGUgcGVyc2lzdGVkIHNlcnZlciB2YWx1ZXMgZm9yIGFueSBudW1iZXIgb2YgcmVhc29uczogdGhlIHVzZXIgbW9kaWZpZWQgdGhlbSBsb2NhbGx5LCBjbGllbnQgcmVmbGVjdGlvblxyXG4gICAqIG1vZGlmaWVkIHRoZW0sIGV0Yy5cclxuICAgKlxyXG4gICAqIFRoZSByZXR1cm5lZCBwcm9taXNlIHdpbGwgY29udGFpbiB0aGUgdmFsdWVzIHdoZW4gZnVsZmlsbGVkXHJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gbG9naWNhbE5hbWVzIC0gJ0xvZ2ljYWwgTmFtZXMnIGFyZSBleHBvc2VkIGFzIGEgbWFwcGluZyBpbiBFbWJlZGRpbmdXaWRnZXQgQVBJLlxyXG4gICAqIEFuZCBjb3JyZXNwb25kIHRvIGEgc2V0IG9mIHdpZGdldCBJRHMgaW4gYSBnaXZlbiBpbnN0YW5jZSBvZiB0aGUgRW1iZWRkaW5nV2lkZ2V0LiBpZTpcclxuICAgKiBMb2dpY2FsIE5hbWU6IEFkZHJlc3NMaW5lMSA9PiBXaWRnZXRJZC1wYWdlOS1wYW5lbDgtYWRkcmVzc3NlY3Rpb243LWFkZHJlc3NsaW5lMS5cclxuICAgKiBMaWdpY2FsIE5hbWU6IFppcENvZGUgPT4gV2lkZ2V0SWQtcGFnZTktcGFuZWw4LWFkZHJlc3NzZWN0aW9uNy16aXBjb2RlLlxyXG4gICAqIFNlZSB0aGUgUENGIGZpZWxkcyBmb3IgRW1iZWRkaW5nV2lkZ2V0XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8R3dWYWx1ZU1hcD59XHJcbiAgICovXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByb21pc2UtZnVuY3Rpb24tYXN5bmNcclxuICBzdGF0aWMgZ2V0VmFsdWVzIChsb2dpY2FsTmFtZXM6IHN0cmluZ1tdKTogUHJvbWlzZTxHd0tleVZhbHVlPHN0cmluZz4+IHtcclxuICAgIHJldHVybiB0aGlzLnNlbmRNZXNzYWdlKEd3TWVzc2FnZXNUb0dXLkdFVF9WQUxVRVMsIGxvZ2ljYWxOYW1lcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxscyB0aGUgRW1iZWRkZWQgV2lkZ2V0J3Mgc2VydmVyIHNpZGUgQUNUSU9OIEhBTkRMRVIgd2l0aCB0aGUgZ2l2ZW4gSlNPTlxyXG4gICAqIG9iamVjdCBhcyBpdHMgYXJndW1lbnQuIFRoaXMgd2lsbCBjYXVzZSBhIGZ1bGwgVUkgcmVmcmVzaC5cclxuICAgKlxyXG4gICAqIFRoZSByZXR1cm5lZCBwcm9taXNlIGlzIG9ubHkgZm9yIGNvbmZpcm1hdGlvbiB0aGF0IHRoZSBtZXNzYWdlIHdhcyBzdWNjZXNzZnVsLCBub3QgdGhlIHJlc3VsdCBvZiB0aGUgYWN0aW9uIG9uIHRoZSBzZXJ2ZXJcclxuICAgKiBAcGFyYW0ge3N0cmluZ30ganNvblBheWxvYWRcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcm9taXNlLWZ1bmN0aW9uLWFzeW5jXHJcbiAgc3RhdGljIGZpcmVBY3Rpb25PblNlcnZlciAocGF5bG9hZDogR3dLZXlWYWx1ZTxhbnk+KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLnNlbmRNZXNzYWdlKEd3TWVzc2FnZXNUb0dXLkZJUkVfQUNUSU9OLCBwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxzIHRoZSBFbWJlZGRlZCBXaWRnZXQncyBzZXJ2ZXIgc2lkZSBVUERBVEUgSEFORExFUiB3aXRoIHRoZSBnaXZlbiBvYmplY3RcclxuICAgKiBvYmplY3QgYXMgaXRzIGFyZ3VtZW50LiBUaGlzIHdpbGwgbm90IGJsb2NrIG9yIHJlZnJlc2ggdGhlIEdXIEFwcGxpY2F0aW9uIFVJLlxyXG4gICAqXHJcbiAgICogTk9URTogVGhlIFByb21pc2UgcmV0dXJuZWQgYnkgdGhpcyBtZXRob2Qgd2lsbCBjb250YWluIHRoZSBwYXlsb2FkIGZyb20gdGhpcyByZXF1ZXN0LlxyXG4gICAqL1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcm9taXNlLWZ1bmN0aW9uLWFzeW5jXHJcbiAgc3RhdGljIG1ha2VOb25CbG9ja2luZ1NlcnZlclJlcXVlc3QgKHBheWxvYWQ6IEd3S2V5VmFsdWU8YW55Pik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5zZW5kTWVzc2FnZShHd01lc3NhZ2VzVG9HVy5OT05fQkxPQ0tJTkdfU0VSVkVSX1JFUVVFU1QsIHBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3Vic2NyaWJlIHRvIGFub3RoZXIgRXh0ZXJuYWwgQ3Jvc3MgT3JpZ2luIHdpbmRvdydzIG1lc3NhZ2VzLlxyXG4gICAqIEltYWdpbmUgdGhhdCB0aGUgR3cgQXBwbGljYXRpb24gaGFzIDIgZW1iZWRkZWQgaWZyYW1lJ3MuIFRoZSBCbHVlIFdpbmRvdywgYW5kIHRoZSBSZWQgV2luZG93LlxyXG4gICAqIEJsdWUgd2luZG93IGNhbiBicm9hZGNhc3QgYSBjdXN0b20gY3Jvc3Mgb3JpZ2luIGV2ZW50LiBMZXQncyBzYXkgXCJHT19CQU5BTkFTXCIuIEFuZCBpbmNsdWRlIHNvbWUgaW5mb3JtYXRpb246IHtudW1iZXJPZkJhbmFuYXM6IDEyfVxyXG4gICAqIEJsdWUgd2luZG93IHdpbGwgc2VuZCB0aGF0IHBhY2thZ2UgdG8gdGhlIEd3QXBwbGljYXRpb24gdmlhIGJyb2FkY2FzdENyb3NzT3JpZ2luRXZlbnQuXHJcbiAgICogUmVkIHdpbmRvdyB3aWxsIG5ldmVyIGhlYXIgYWJvdXQgdGhpcyBtZXNzYWdlLlxyXG4gICAqXHJcbiAgICogQnV0IGlmIFJlZCBXaW5kb3cgY2FsbHMgYWRkQ3Jvc3NPcmlnaW5FdmVudExpc3RlbmVyLCBwYXNzaW5nIFwicmVkV2luZG93XCIgYW5kIFwiR09fQkFOQU5BU1wiIHRoZW4gdGhlIEd3IEFwcGxpY2F0aW9uXHJcbiAgICogd2lsbCByb3V0ZSB0aGUgbWVzc2FnZSBldmVudCB0byB0aGUgYmx1ZSB3aW5kb3csIGFuZCBjYWxsIHRoZSBwcm92aWRlZCBjYWxsYmFjayBmdW5jdGlvbi5cclxuICAgKlxyXG4gICAqIExpa2UgZ2V0L3NldCB2YWx1ZXMgdGhpcyBmdW5jdGlvbiB1c2VzIGxvZ2ljYWwgbmFtZXMsIGFzIGdpdmVuIHRvIHRoZSBlbWJlZGRlZCB3aWRnZXQgdmlhXHJcbiAgICogdGhlIEVtYmVkZGVkV2lkZ2V0UmVmIGVsZW1lbnQuIFRob3VnaCBpbiB0aGlzIGNhc2UgdGhlIGxvZ2ljYWwgbmFtZXMgcmVmZXIgdG8gYW5vdGhlclxyXG4gICAqIGVtYmVkZGVkIHdpZGdldCByYXRoZXIgdGhhbiB0byBhbiBpbnB1dC5cclxuICAgKlxyXG4gICAqIE5PVEU6IHRvIHJlY2VpdmUgbWVzc2FnZXMgZnJvbSBhbnkgb3RoZXIgZXh0ZXJuYWwgd2luZG93cywgdGhleSBtdXN0IGJlIGV4cGxpY2l0bHkgYWxsb3cgbGlzdGVkIHZpYSB0aGVcclxuICAgKiBHd0Nyb3NzT3JpZ2luRXh0ZXJuYWwuaW5pdCBtZXRob2QsIGVpdGhlciBieSBkb21haW4sIG9yIGJ5IHNwZWNpZnlpbmcgYSB3aWxkY2FyZCBkb21haW4uXHJcbiAgICpcclxuICAgKiBUaGUgcmV0dXJuZWQgcHJvbWlzZSBpcyBvbmx5IGZvciBjb25maXJtYXRpb24gdGhhdCB0aGUgbWVzc2FnZSB3YXMgc3VjY2Vzc2Z1bFxyXG4gICAqIEBwYXJhbSBicm9hZGNhc3RlcldpbmRvd05hbWUgdGhlIGxvZ2ljYWwgbmFtZSBvZiB0aGUgd2luZG93IHlvdSB3YW50IHRvIGxpc3RlbiB0b1xyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgbmFtZSBvZiB0aGUgZXZlbnQsIG9yIFwiKlwiIHRvIGxpc3RlbiB0byBhbnkgZXZlbnRcclxuICAgKiBAcGFyYW0ge0d3RXZlbnRJbmZvQ2FsbGJhY2t9IGNhbGxiYWNrXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJvbWlzZS1mdW5jdGlvbi1hc3luY1xyXG4gIHN0YXRpYyBhZGRDcm9zc09yaWdpbkV2ZW50TGlzdGVuZXIgKGJyb2FkY2FzdGVyV2luZG93TmFtZTogR3dDcm9zc09yaWdpbldpbmRvd05hbWUsIGV2ZW50TmFtZTogR3dDcm9zc09yaWdpbkV2ZW50TmFtZSwgY2FsbGJhY2s6IEd3Q3Jvc3NPcmlnaW5FdmVudExpc3RlbmVyQ2FsbGJhY2spOiBQcm9taXNlPGFueT4ge1xyXG4gICAgbGV0IGN1cnJlbnRseUxpc3RlbmVkVG9FdmVudHMgPSB0aGlzLmNyb3NzT3JpZ2luRXZlbnRDYWxsYmFja0J5QnJvYWRjYXN0ZXJUaGVuRXZlbnRbYnJvYWRjYXN0ZXJXaW5kb3dOYW1lXSA9IHRoaXMuY3Jvc3NPcmlnaW5FdmVudENhbGxiYWNrQnlCcm9hZGNhc3RlclRoZW5FdmVudFticm9hZGNhc3RlcldpbmRvd05hbWVdIHx8IHt9O1xyXG5cclxuICAgIGlmIChjdXJyZW50bHlMaXN0ZW5lZFRvRXZlbnRzW1wiKlwiXSkge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVGhlcmUgaXMgYWxyZWFkeSBhbiAnYWxsJyBsaXN0ZW5lciAoYCpgKSBmb3IgdGhpcyBicm9hZGNhc3Rlci4gUmVtb3ZlIGl0IGJlZm9yZSBhZGRpbmcgYW55IG90aGVyIGxpc3RlbmVyczogXCIgKyBicm9hZGNhc3RlcldpbmRvd05hbWUgKyBcIjpcIiArIGV2ZW50TmFtZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjdXJyZW50bHlMaXN0ZW5lZFRvRXZlbnRzW2V2ZW50TmFtZV0pIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkNhbm5vdCByZWdpc3RlciBtdWx0aXBsZSBjYWxsYmFja3MgZm9yIHRoZSBzYW1lIGJyb2FkY2FzdGVyIGFuZCBldmVudDogXCIgKyBicm9hZGNhc3RlcldpbmRvd05hbWUgKyBcIjpcIiArIGV2ZW50TmFtZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChldmVudE5hbWUgPT09IFwiKlwiICYmIE9iamVjdC5rZXlzKGN1cnJlbnRseUxpc3RlbmVkVG9FdmVudHMpLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc29sZS53YXJuKFwiQWRkaW5nIGFuICdhbGwnIGxpc3RlbmVyIG9mICcqJyB0byBhIGJyb2FkY2FzdGVyIHRoYXQgYWxyZWFkeSBoYXMgbW9yZSBzcGVjaWZpYyBsaXN0ZW5lci4gQWxsIHNwZWNpZmljIGxpc3RlbmVycyB3aWxsIGJlIHJlbW92ZWQuIEluIG9yZGVyIHRvIGF2b2lkIHRoaXMgd2FybmluZywgcmVtb3ZlIGtub3duIGxpc3RlbmVycyBtYW51YWxseSBiZWZvcmUgYWRkaW5nLlwiKTtcclxuICAgICAgY3VycmVudGx5TGlzdGVuZWRUb0V2ZW50cyA9IHRoaXMuY3Jvc3NPcmlnaW5FdmVudENhbGxiYWNrQnlCcm9hZGNhc3RlclRoZW5FdmVudFticm9hZGNhc3RlcldpbmRvd05hbWVdID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgY3VycmVudGx5TGlzdGVuZWRUb0V2ZW50c1tldmVudE5hbWVdID0gY2FsbGJhY2s7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuc2VuZE1lc3NhZ2UoR3dNZXNzYWdlc1RvR1cuQUREX0NST1NTX09SSUdJTl9FVkVOVF9MSVNURU5FUiwge2Jyb2FkY2FzdGVyV2luZG93TmFtZSwgZXZlbnROYW1lfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIHRoZSBDcm9zcyBPcmlnaW4gRXZlbnQgTGlzdGVuZXIgZnJvbSB0aGUgR1cgQXBwbGljYXRpb24gd2luZG93XHJcbiAgICogU2VlIEd3Q3Jvc3NPcmlnaW5FeHRlcm5hbC5hZGRDcm9zc09yaWdpbkV2ZW50TGlzdGVuZXIuXHJcbiAgICpcclxuICAgKiBMaWtlIGdldC9zZXQgdmFsdWVzIHRoaXMgZnVuY3Rpb24gdXNlcyBsb2dpY2FsIG5hbWVzLCBhcyBnaXZlbiB0byB0aGUgZW1iZWRkZWQgd2lkZ2V0IHZpYVxyXG4gICAqIHRoZSBFbWJlZGRlZFdpZGdldFJlZiBlbGVtZW50LiBUaG91Z2ggaW4gdGhpcyBjYXNlIHRoZSBsb2dpY2FsIG5hbWVzIHJlZmVyIHRvIGFub3RoZXJcclxuICAgKiBlbWJlZGRlZCB3aWRnZXQgcmF0aGVyIHRoYW4gdG8gYW4gaW5wdXQuXHJcbiAgICpcclxuICAgKiBUaGUgcmV0dXJuZWQgcHJvbWlzZSBpcyBvbmx5IGZvciBjb25maXJtYXRpb24gdGhhdCB0aGUgbWVzc2FnZSB3YXMgc3VjY2Vzc2Z1bFxyXG4gICAqIEBwYXJhbSBicm9hZGNhc3RlcldpbmRvd05hbWUgdGhlIGxvZ2ljYWwgbmFtZSBvZiB0aGUgd2luZG93IHlvdSB3YW50IHRvIHN0b3AgbGlzdGVuaW5nIHRvXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBuYW1lIG9mIHRoZSBldmVudCwgb3IgXCIqXCIgaWYgcmVnaXN0ZXJkIHRvIGxpc3RlbiB0byBhbnkgZXZlbnRcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcm9taXNlLWZ1bmN0aW9uLWFzeW5jXHJcbiAgc3RhdGljIHJlbW92ZUNyb3NzT3JpZ2luRXZlbnRMaXN0ZW5lciAoYnJvYWRjYXN0ZXJXaW5kb3dOYW1lOiBHd0Nyb3NzT3JpZ2luV2luZG93TmFtZSwgZXZlbnROYW1lOiBHd0Nyb3NzT3JpZ2luRXZlbnROYW1lKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IGJ5QnJvYWRjYXN0ZXIgPSB0aGlzLmNyb3NzT3JpZ2luRXZlbnRDYWxsYmFja0J5QnJvYWRjYXN0ZXJUaGVuRXZlbnRbYnJvYWRjYXN0ZXJXaW5kb3dOYW1lXTtcclxuXHJcbiAgICBpZiAoYnlCcm9hZGNhc3Rlcikge1xyXG4gICAgICBpZiAoZXZlbnROYW1lID09PSBcIipcIikge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmNyb3NzT3JpZ2luRXZlbnRDYWxsYmFja0J5QnJvYWRjYXN0ZXJUaGVuRXZlbnRbYnJvYWRjYXN0ZXJXaW5kb3dOYW1lXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZWxldGUgYnlCcm9hZGNhc3RlcltldmVudE5hbWVdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuc2VuZE1lc3NhZ2UoR3dNZXNzYWdlc1RvR1cuUkVNT1ZFX0NST1NTX09SSUdJTl9FVkVOVF9MSVNURU5FUiwge2Jyb2FkY2FzdGVyV2luZG93TmFtZSwgZXZlbnROYW1lfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBCcm9hZGNhc3RzIGEgQ3Jvc3MgT3JpZ2luIEV2ZW50IChNZXNzYWdlKSB0byB0aGUgR1cgQXBwbGljYXRpb24gY2xpZW50LiBUaGUgR1cgQXBwbGljYXRpb24gdGhlbiByb3V0ZXMgdGhlIG1lc3NhZ2UgZXZlbnRcclxuICAgKiBhbmQgaW5mb3JtYXRpb24gcGFja2FnZSBvbiB0byBhbnkgb3RoZXIgZW1iZWRkZWQgd2luZG93cyBpbiB0aGUgYXBwbGljYXRpb24gdGhhdCBhcmUgbGlzdGVuaW5nIHRvIHRoZSBvcmlnaW4gYW5kIGV2ZW50IG5hbWUuXHJcbiAgICogU2VlIEd3Q3Jvc3NPcmlnaW5FeHRlcm5hbC5hZGRDcm9zc09yaWdpbkV2ZW50TGlzdGVuZXIuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJvbWlzZS1mdW5jdGlvbi1hc3luY1xyXG4gIHN0YXRpYyBicm9hZGNhc3RDcm9zc09yaWdpbkV2ZW50IChldmVudE5hbWU6IEd3Q3Jvc3NPcmlnaW5FdmVudE5hbWUsIGluZm86IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICBpZiAoZXZlbnROYW1lLmxlbmd0aCA9PT0gMCB8fCBldmVudE5hbWUgPT09IFwiKlwiKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbGxlZ2FsIGV2ZW50TmFtZSBwYXNzZWQgdG8gZmlyZUNyb3NzT3JpZ2luRXZlbnQuIENhbm5vdCBiZSBlbXB0eSBvciB0aGUgc2luZ2xlIGAqYCBjaGFyYWN0ZXI6IFwiICsgZXZlbnROYW1lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuc2VuZE1lc3NhZ2UoR3dNZXNzYWdlc1RvR1cuQlJPQURDQVNUX0NST1NTX09SSUdJTl9FVkVOVCwge2V2ZW50TmFtZSwgaW5mb30pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIEd3IEFwcGxpY2F0aW9uIHNlbmRzICdldmVudHMnIGZvciBzb21lIHByZWRlZmluZWQgY2xpZW50IHJlbGF0ZWQgbm90aWZpY2F0aW9ucywgc3VjaCBhcyB0aGUgVGhlbWUgQ2hhbmdpbmcsIG9yIHRoZSBMb2NhbGUgY2hhbmdpbmcuXHJcbiAgICogVGhlcmUgaXMgYWxzbyBhIEdFTkVSQUwgY2F0ZWdvcnkgdGhhdCBleGlzdHMgbWFpbmx5IGZvciBmdXR1cmUgcHJvb2ZpbmcuIEFkZGl0aW9uYWwgZXZlbnRzIG1heSBiZSBjb25maWd1cmVkIGluIHRoZSBmdXR1cmUuXHJcbiAgICogQHBhcmFtIHtHd05vdGlmaWNhdGlvblR5cGV9IG5vdGlmaWNhdGlvblR5cGVcclxuICAgKiBAcGFyYW0ge0d3Tm90aWZpY2F0aW9uQ2FsbGJhY2t9IGNhbGxiYWNrXHJcbiAgICovXHJcbiAgc3RhdGljIGFkZENhbGxiYWNrRm9yR3dOb3RpZmljYXRpb25UeXBlIChub3RpZmljYXRpb25UeXBlOiBHd05vdGlmaWNhdGlvblR5cGUsIGNhbGxiYWNrOiBHd05vdGlmaWNhdGlvbkNhbGxiYWNrKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5nd05vdGlmaWNhdGlvbkxpc3RlbmVyc1tub3RpZmljYXRpb25UeXBlXSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBdHRlbXB0aW5nIHRvIGxvYWQgbXVsdGlwbGUgY2FsbGJhY2tzIGZvciBub3RpZmljYXRpb24gdHlwZTogXCIgKyBub3RpZmljYXRpb25UeXBlICsgXCIuIGNhbGwgcmVtb3ZlQ2FsbGJhY2tCYWNrRm9yR1dOb3RpZmljYXRpb25UeXBlIGZpcnN0LlwiKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5nd05vdGlmaWNhdGlvbkxpc3RlbmVyc1tcIipcIl0pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXR0ZW1wdGluZyB0byBsb2FkIGEgbm90aWZpY2F0aW9uIGxpc3RlbmVyIHdoZW4gdGhlaXIgaXMgYWxyZWFkeSBhICogbGlzdGVuZXIuIE5ldyBsaXN0ZW5lcjogXCIgKyBub3RpZmljYXRpb25UeXBlKTtcclxuICAgIH1cclxuICAgIHRoaXMuZ3dOb3RpZmljYXRpb25MaXN0ZW5lcnNbbm90aWZpY2F0aW9uVHlwZV0gPSBjYWxsYmFjaztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBHdyBBcHBsaWNhdGlvbiBzZW5kcyAnZXZlbnRzJyBmb3Igc29tZSBwcmVkZWZpbmVkIGNsaWVudCByZWxhdGVkIG5vdGlmaWNhdGlvbnMsIHN1Y2ggYXMgdGhlIFRoZW1lIENoYW5naW5nLCBvciB0aGUgTG9jYWxlIGNoYW5naW5nLlxyXG4gICAqIFRoZXJlIGlzIGFsc28gYSBHRU5FUkFMIGNhdGVnb3J5IHRoYXQgZXhpc3RzIG1haW5seSBmb3IgZnV0dXJlIHByb29maW5nLiBBZGRpdGlvbmFsIGV2ZW50cyBtYXkgYmUgY29uZmlndXJlZCBpbiB0aGUgZnV0dXJlLlxyXG4gICAqIEBwYXJhbSB7R3dOb3RpZmljYXRpb25UeXBlfSBub3RpZmljYXRpb25UeXBlXHJcbiAgICogQHBhcmFtIHtHd05vdGlmaWNhdGlvbkNhbGxiYWNrfSBjYWxsYmFja1xyXG4gICAqL1xyXG4gIHN0YXRpYyByZW1vdmVDYWxsYmFja0Zvckd3Tm90aWZpY2F0aW9uVHlwZSAobm90aWZpY2F0aW9uVHlwZTogR3dOb3RpZmljYXRpb25UeXBlKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZ3dOb3RpZmljYXRpb25MaXN0ZW5lcnNbbm90aWZpY2F0aW9uVHlwZV0pIHtcclxuICAgICAgY29uc29sZS53YXJuKFwiQXR0ZW1wdGluZyB0byByZW1vdmUgYSBub24gZXhpc3RlbnQgbm90aWZpY2F0aW9uIGxpc3RlbmVyIGZvcjogXCIgKyBub3RpZmljYXRpb25UeXBlKTtcclxuICAgIH1cclxuICAgIGRlbGV0ZSB0aGlzLmd3Tm90aWZpY2F0aW9uTGlzdGVuZXJzW25vdGlmaWNhdGlvblR5cGVdO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90cy9lbWJlZGRlZC9Hd0Nyb3NzT3JpZ2luRXh0ZXJuYWwudHMiLCJleHBvcnQgdHlwZSBHd1Jlc29sdmUgPSAodmFsdWU6IGFueSkgPT4gdm9pZDtcclxuZXhwb3J0IHR5cGUgR3dSZWplY3QgPSAocmVhc29uOiBhbnkpID0+IG5ldmVyO1xyXG5leHBvcnQgdHlwZSBHd0NhbGxiYWNrT25GdWxmaWxsZWQgPSAodmFsdWU6IGFueSkgPT4gdm9pZDtcclxuZXhwb3J0IHR5cGUgR3dDYWxsYmFja09uUmVqZWN0ZWQgPSAocmVhc29uOiBhbnkpID0+IHZvaWQ7XHJcbmV4cG9ydCB0eXBlIEdXUHJvbWlzZUV4ZWN1dG9yID0gKHJlc29sdmU6IEd3UmVzb2x2ZSwgcmVqZWN0OiBHd1JlamVjdCkgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIEd3UHJvbWlzZVN0YXRlIHtcclxuICAvKiogUHJvbWlzZSBub3QgeWV0IHJlc29sdmVkICovXHJcbiAgUEVORElORyA9IDAsXHJcbiAgLyoqIFByb21pc2UgcmVzb2x2ZWQgc3VjY2Vzc2Z1bGx5ICovXHJcbiAgRlVMRklMTEVELFxyXG4gIC8qKiBQcm9taXNlIHJlamVjdGVkICovXHJcbiAgUkVKRUNURUQsXHJcbiAgLyoqIFByb21pc2UgcmVqZWN0ZWQsIGJ1dCB0aGUgZXJyb3Igd2FzIGhhbmRsZWQgc28gaXQgd29uJ3QgcHJvcGFnYXRlIHRvIGNoYWluZWQgcHJvbWlzZXMgKi9cclxuICBSRUpFQ1RFRF9CVVRfSEFORExFRFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEd3U3Vic2NyaWJlclBhY2thZ2Uge1xyXG4gIHN1YnNjcmliZXI6IEd3UHJvbWlzZTtcclxuICBpc0ZpbmFsbHk6IGJvb2xlYW47XHJcbiAgb25GdWxmaWxsOiBHd0NhbGxiYWNrT25GdWxmaWxsZWQgfCB1bmRlZmluZWQ7XHJcbiAgb25SZWplY3Q6IEd3Q2FsbGJhY2tPblJlamVjdGVkIHwgdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElHd1RoZW5hYmxlIHtcclxuICB0aGVuIChvbkZ1bGZpbGw6IEd3Q2FsbGJhY2tPbkZ1bGZpbGxlZCwgb25SZWplY3Q/OiBHd0NhbGxiYWNrT25SZWplY3RlZCk6IElHd1RoZW5hYmxlO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBmaWxlIHBvbHlmaWxscyBQcm9taXNlIG9uIHRoZSB3aW5kb3csIGlmIHdpbmRvdy5Qcm9taXNlIGlzIG5vdCBvZiB0eXBlICdmdW5jdGlvbidcclxuICogSXQncyBhIHN0YW5kIGFsb25lIGZpbGUsIHdpdGhvdXQgYW55IGltcG9ydHMsIHNvIGNhbiBhbHNvIGJlIGVhc2lseSBoYW5kZWQgb2ZmIHRvIHRoZSBlbWJlZGRlZCBhcHBsaWNhdGlvbiBpZiBuZWVkZWRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHd1Byb21pc2UgaW1wbGVtZW50cyBJR3dUaGVuYWJsZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBzdWJzY3JpYmVyUGFja2FnZXM6IEd3U3Vic2NyaWJlclBhY2thZ2VbXSA9IFtdO1xyXG4gIHByaXZhdGUgcmVzdWx0OiBhbnkgPSB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yIChleGVjdXRvcjogR1dQcm9taXNlRXhlY3V0b3IgfCBudWxsKSB7XHJcbiAgICBpZiAoZXhlY3V0b3IpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBleGVjdXRvcih0aGlzLmJlUmVzb2x2ZWQuYmluZCh0aGlzKSwgdGhpcy5iZVJlamVjdGVkLmJpbmQodGhpcykpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhpcy5iZVJlamVjdGVkKGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGcm9tIE1ETjogVGhlIHN0YXRpYyBQcm9taXNlLnJlamVjdCBmdW5jdGlvbiByZXR1cm5zIGEgUHJvbWlzZSB0aGF0IGlzIHJlamVjdGVkLlxyXG4gICAqIEZvciBkZWJ1Z2dpbmcgcHVycG9zZXMgYW5kIHNlbGVjdGl2ZSBlcnJvciBjYXRjaGluZywgaXQgaXMgdXNlZnVsIHRvIG1ha2UgcmVhc29uIGFuIGluc3RhbmNlb2YgRXJyb3JcclxuICAgKiBAcGFyYW0gcmVhc29uXHJcbiAgICogQHJldHVybnMge0d3UHJvbWlzZX1cclxuICAgKi9cclxuICBzdGF0aWMgcmVqZWN0IChyZWFzb246IGFueSk6IEd3UHJvbWlzZSB7XHJcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IEd3UHJvbWlzZShudWxsKTtcclxuICAgIHJldHVybiBwcm9taXNlLmJlUmVqZWN0ZWQocmVhc29uKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZyb20gTUROOiBUaGUgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKSBtZXRob2QgcmV0dXJucyBhIFByb21pc2Ugb2JqZWN0IHRoYXQgaXMgcmVzb2x2ZWQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWUuXHJcbiAgICogSWYgdGhlIHZhbHVlIGlzIGEgcHJvbWlzZSwgdGhhdCBwcm9taXNlIGlzIHJldHVybmVkOyBpZiB0aGUgdmFsdWUgaXMgYSB0aGVuYWJsZSAoaS5lLiBoYXMgYSBcInRoZW5cIiBtZXRob2QpLFxyXG4gICAqIHRoZSByZXR1cm5lZCBwcm9taXNlIHdpbGwgXCJmb2xsb3dcIiB0aGF0IHRoZW5hYmxlLCBhZG9wdGluZyBpdHMgZXZlbnR1YWwgc3RhdGU7XHJcbiAgICogb3RoZXJ3aXNlIHRoZSByZXR1cm5lZCBwcm9taXNlIHdpbGwgYmUgZnVsZmlsbGVkIHdpdGggdGhlIHZhbHVlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHZhbHVlXHJcbiAgICogQHJldHVybnMge0d3UHJvbWlzZX1cclxuICAgKi9cclxuICBzdGF0aWMgcmVzb2x2ZSAodGhlbmFibGVPclZhbHVlOiBhbnkpOiBHd1Byb21pc2Uge1xyXG4gICAgaWYgKHRoZW5hYmxlT3JWYWx1ZSBpbnN0YW5jZW9mIEd3UHJvbWlzZSkge1xyXG4gICAgICByZXR1cm4gdGhlbmFibGVPclZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgR3dQcm9taXNlKG51bGwpO1xyXG4gICAgcmV0dXJuIHByb21pc2UuYmVSZXNvbHZlZCh0aGVuYWJsZU9yVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRnJvbSBNRE46IFRoZSBQcm9taXNlLmFsbChpdGVyYWJsZSkgbWV0aG9kIHJldHVybnMgYSBzaW5nbGUgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gYWxsIG9mIHRoZSBwcm9taXNlcyBpbiB0aGUgaXRlcmFibGUgYXJndW1lbnQgaGF2ZSByZXNvbHZlZFxyXG4gICAqIG9yIHdoZW4gdGhlIGl0ZXJhYmxlIGFyZ3VtZW50IGNvbnRhaW5zIG5vIHByb21pc2VzLlxyXG4gICAqIEl0IHJlamVjdHMgd2l0aCB0aGUgcmVhc29uIG9mIHRoZSBmaXJzdCBwcm9taXNlIHRoYXQgcmVqZWN0cy5cclxuICAgKlxyXG4gICAqIFJldHVybnNcclxuICAgKiAtIEFuIGFscmVhZHkgcmVzb2x2ZWQgUHJvbWlzZSBpZiB0aGUgaXRlcmFibGUgcGFzc2VkIGlzIGVtcHR5IG9yIGNvbnRhaW5zIG5vIHByb21pc2VzLlxyXG4gICAqIC0gQSBwZW5kaW5nIFByb21pc2UgaW4gYWxsIG90aGVyIGNhc2VzLiBUaGlzIHJldHVybmVkIHByb21pc2UgaXMgdGhlbiByZXNvbHZlZC9yZWplY3RlZCBhc3luY2hyb25vdXNseSAoYXMgc29vbiBhcyB0aGUgc3RhY2sgaXMgZW1wdHkpXHJcbiAgICogICB3aGVuIGFsbCB0aGUgcHJvbWlzZXMgaW4gdGhlIGdpdmVuIGl0ZXJhYmxlIGhhdmUgcmVzb2x2ZWQsXHJcbiAgICogICBvciBpZiBhbnkgb2YgdGhlIHByb21pc2VzIHJlamVjdC5cclxuICAgKlxyXG4gICAqIFJldHVybmVkIHZhbHVlcyB3aWxsIGJlIGluIG9yZGVyIG9mIHRoZSBQcm9taXNlcyBwYXNzZWQsIHJlZ2FyZGxlc3Mgb2YgY29tcGxldGlvbiBvcmRlci5cclxuICAgKi9cclxuICBzdGF0aWMgYWxsIChwcm9taXNlczogR3dQcm9taXNlW10pOiBHd1Byb21pc2Uge1xyXG4gICAgaWYgKHByb21pc2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gR3dQcm9taXNlLnJlc29sdmUoW10pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdHM6IGFueVtdID0gW107XHJcbiAgICBsZXQgcmVtYWluaW5nOiBudW1iZXIgPSBwcm9taXNlcy5sZW5ndGg7XHJcblxyXG4gICAgY29uc3QgYXN5bmNNYXBwZXJGdWxmaWxsID0gKGk6IG51bWJlciwgdmFsdWU6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoIXJldHVyblByb21pc2UuaXNQZW5kaW5nKCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlc3VsdHNbaV0gPSB2YWx1ZTtcclxuICAgICAgcmVtYWluaW5nLS07XHJcbiAgICAgIGlmIChyZW1haW5pbmcgPT09IDApIHtcclxuICAgICAgICByZXR1cm5Qcm9taXNlLmJlUmVzb2x2ZWQocmVzdWx0cyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmV0dXJuUHJvbWlzZSA9IG5ldyBHd1Byb21pc2UoKG5vdHVzZWQ6IEd3UmVzb2x2ZSwgcmVqZWN0OiBHd1JlamVjdCkgPT4ge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb21pc2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgdGhlbmFibGVPclZhbCA9IHByb21pc2VzW2ldO1xyXG4gICAgICAgIGlmIChHd1Byb21pc2UuaXNUaGVuYWJsZSh0aGVuYWJsZU9yVmFsKSkge1xyXG4gICAgICAgICAgdGhlbmFibGVPclZhbC50aGVuKGFzeW5jTWFwcGVyRnVsZmlsbC5iaW5kKHRoaXMsIGkpLCByZWplY3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhc3luY01hcHBlckZ1bGZpbGwoaSwgdGhlbmFibGVPclZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmV0dXJuUHJvbWlzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZyb20gTUROOiBUaGUgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKSBtZXRob2QgcmV0dXJucyBhIHByb21pc2VcclxuICAgKiB0aGF0IHJlc29sdmVzIG9yIHJlamVjdHMgYXMgc29vbiBhcyBvbmUgb2YgdGhlIHByb21pc2VzIGluIHRoZSBpdGVyYWJsZSByZXNvbHZlcyBvciByZWplY3RzLFxyXG4gICAqIHdpdGggdGhlIHZhbHVlIG9yIHJlYXNvbiBmcm9tIHRoYXQgcHJvbWlzZS5cclxuICAgKlxyXG4gICAqIElmIHRoZSBpdGVyYWJsZSBwYXNzZWQgaXMgZW1wdHksIHRoZSBwcm9taXNlIHJldHVybmVkIHdpbGwgYmUgZm9yZXZlciBwZW5kaW5nLlxyXG4gICAqXHJcbiAgICogSWYgdGhlIGl0ZXJhYmxlIGNvbnRhaW5zIG9uZSBvciBtb3JlIG5vbi1wcm9taXNlIHZhbHVlIGFuZC9vciBhbiBhbHJlYWR5IHJlc29sdmVkL3JlamVjdGVkIHByb21pc2UsXHJcbiAgICogdGhlbiBQcm9taXNlLnJhY2Ugd2lsbCByZXNvbHZlIHRvIHRoZSBmaXJzdCBvZiB0aGVzZSB2YWx1ZXMgZm91bmQgaW4gdGhlIGl0ZXJhYmxlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtHd1Byb21pc2VbXX0gcHJvbWlzZXNcclxuICAgKiBAcmV0dXJucyB7R3dQcm9taXNlfVxyXG4gICAqL1xyXG4gIHN0YXRpYyByYWNlIChwcm9taXNlczogKEd3UHJvbWlzZSB8IElHd1RoZW5hYmxlIHwgYW55KVtdKTogR3dQcm9taXNlIHtcclxuICAgIGNvbnN0IGV4ZWN1dG9yID0gKHJlc29sdmU6IEd3UmVzb2x2ZSwgcmVqZWN0OiBHd1JlamVjdCkgPT4ge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb21pc2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgdGhlbmFibGVPclZhbHVlID0gcHJvbWlzZXNbaV07XHJcblxyXG4gICAgICAgIGlmIChHd1Byb21pc2UuaXNUaGVuYWJsZSh0aGVuYWJsZU9yVmFsdWUpKSB7XHJcbiAgICAgICAgICB0aGVuYWJsZU9yVmFsdWUudGhlbihyZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXNvbHZlKHRoZW5hYmxlT3JWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJldHVyblByb21pc2UgPSBuZXcgR3dQcm9taXNlKGV4ZWN1dG9yKTtcclxuXHJcbiAgICByZXR1cm4gcmV0dXJuUHJvbWlzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZyb20gTUROOiBSZXR1cm4gQSBQcm9taXNlIGluIHRoZSBwZW5kaW5nIHN0YXRlLlxyXG4gICAqIFRoZSBoYW5kbGVyIGZ1bmN0aW9uIChvbkZ1bGZpbGxlZCBvciBvblJlamVjdGVkKSB0aGVuIGdldHMgY2FsbGVkIGFzeW5jaHJvbm91c2x5IChhcyBzb29uIGFzIHRoZSBzdGFjayBpcyBlbXB0eSkuXHJcbiAgICogQWZ0ZXIgdGhlIGludm9jYXRpb24gb2YgdGhlIGhhbmRsZXIgZnVuY3Rpb24sIGlmIHRoZSBoYW5kbGVyIGZ1bmN0aW9uOlxyXG4gICAqXHJcbiAgICogLSByZXR1cm5zIGEgdmFsdWUsIHRoZSBwcm9taXNlIHJldHVybmVkIGJ5IHRoZW4gZ2V0cyByZXNvbHZlZCB3aXRoIHRoZSByZXR1cm5lZCB2YWx1ZSBhcyBpdHMgdmFsdWU7XHJcbiAgICogLSB0aHJvd3MgYW4gZXJyb3IsIHRoZSBwcm9taXNlIHJldHVybmVkIGJ5IHRoZW4gZ2V0cyByZWplY3RlZCB3aXRoIHRoZSB0aHJvd24gZXJyb3IgYXMgaXRzIHZhbHVlO1xyXG4gICAqIC0gcmV0dXJucyBhbiBhbHJlYWR5IHJlc29sdmVkIHByb21pc2UsIHRoZSBwcm9taXNlIHJldHVybmVkIGJ5IHRoZW4gZ2V0cyByZXNvbHZlZCB3aXRoIHRoYXQgcHJvbWlzZSdzIHZhbHVlIGFzIGl0cyB2YWx1ZTtcclxuICAgKiAtIHJldHVybnMgYW4gYWxyZWFkeSByZWplY3RlZCBwcm9taXNlLCB0aGUgcHJvbWlzZSByZXR1cm5lZCBieSB0aGVuIGdldHMgcmVqZWN0ZWQgd2l0aCB0aGF0IHByb21pc2UncyB2YWx1ZSBhcyBpdHMgdmFsdWUuXHJcbiAgICogLSByZXR1cm5zIGFub3RoZXIgcGVuZGluZyBwcm9taXNlIG9iamVjdCwgdGhlIHJlc29sdXRpb24vcmVqZWN0aW9uIG9mIHRoZSBwcm9taXNlIHJldHVybmVkIGJ5IHRoZW4gd2lsbCBiZSBzdWJzZXF1ZW50IHRvIHRoZSByZXNvbHV0aW9uL3JlamVjdGlvbiBvZiB0aGUgcHJvbWlzZSByZXR1cm5lZCBieSB0aGUgaGFuZGxlci5cclxuICAgKiAgIEFsc28sIHRoZSB2YWx1ZSBvZiB0aGUgcHJvbWlzZSByZXR1cm5lZCBieSB0aGVuIHdpbGwgYmUgdGhlIHNhbWUgYXMgdGhlIHZhbHVlIG9mIHRoZSBwcm9taXNlIHJldHVybmVkIGJ5IHRoZSBoYW5kbGVyLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtHd0NhbGxiYWNrT25GdWxmaWxsZWQgfCB1bmRlZmluZWR9IG9uRnVsZmlsbFxyXG4gICAqIEBwYXJhbSB7R3dDYWxsYmFja09uUmVqZWN0ZWR9IG9uUmVqZWN0XHJcbiAgICogQHJldHVybnMge0d3UHJvbWlzZX1cclxuICAgKi9cclxuICB0aGVuIChvbkZ1bGZpbGw6IEd3Q2FsbGJhY2tPbkZ1bGZpbGxlZCB8IHVuZGVmaW5lZCwgb25SZWplY3Q/OiBHd0NhbGxiYWNrT25SZWplY3RlZCk6IEd3UHJvbWlzZSB7XHJcbiAgICByZXR1cm4gdGhpcy5hZGRTdWJzY3JpYmVyKGZhbHNlLCBvbkZ1bGZpbGwsIG9uUmVqZWN0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZyb20gTUROOiBUaGUgY2F0Y2goKSBtZXRob2QgcmV0dXJucyBhIFByb21pc2UgYW5kIGRlYWxzIHdpdGggcmVqZWN0ZWQgY2FzZXMgb25seS5cclxuICAgKiBJdCBiZWhhdmVzIHRoZSBzYW1lIGFzIGNhbGxpbmcgUHJvbWlzZS5wcm90b3R5cGUudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpXHJcbiAgICogKGluIGZhY3QsIGNhbGxpbmcgb2JqLmNhdGNoKG9uUmVqZWN0ZWQpIGludGVybmFsbHkgY2FsbHMgb2JqLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKSkuXHJcbiAgICogQHBhcmFtIHtHd0NhbGxiYWNrT25SZWplY3RlZH0gb25FcnJvclxyXG4gICAqIEByZXR1cm5zIHtHd1Byb21pc2V9XHJcbiAgICovXHJcbiAgY2F0Y2ggKG9uRXJyb3I6IEd3Q2FsbGJhY2tPblJlamVjdGVkKTogR3dQcm9taXNlIHtcclxuICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvbkVycm9yKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZyb20gTUROOiBUaGUgZmluYWxseSgpIG1ldGhvZCBjYW4gYmUgdXNlZnVsIGlmIHlvdSB3YW50IHRvIGRvIHNvbWUgcHJvY2Vzc2luZyBvciBjbGVhbnVwIG9uY2UgdGhlIHByb21pc2UgaXMgc2V0dGxlZCwgcmVnYXJkbGVzcyBvZiBpdHMgb3V0Y29tZS5cclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbkZpbmFsbHlcclxuICAgKiBAcmV0dXJucyB7R3dQcm9taXNlfVxyXG4gICAqL1xyXG4gIGZpbmFsbHkgKG9uRmluYWxseTogRnVuY3Rpb24pOiBHd1Byb21pc2Uge1xyXG4gICAgY29uc3QgY2FsbE9uRmluYWxseSA9ICh2YWw6IGFueSkgPT4ge1xyXG4gICAgICBvbkZpbmFsbHkoKTtcclxuICAgICAgcmV0dXJuIHZhbDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5hZGRTdWJzY3JpYmVyKHRydWUsIGNhbGxPbkZpbmFsbHksIGNhbGxPbkZpbmFsbHkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRTdWJzY3JpYmVyIChpc0ZpbmFsbHk6IGJvb2xlYW4sIG9uRnVsZmlsbDogR3dDYWxsYmFja09uRnVsZmlsbGVkIHwgdW5kZWZpbmVkLCBvblJlamVjdD86IEd3Q2FsbGJhY2tPblJlamVjdGVkKTogR3dQcm9taXNlIHtcclxuICAgIGNvbnN0IHN1YnNjcmliZXIgPSBuZXcgR3dQcm9taXNlKG51bGwpO1xyXG5cclxuICAgIHRoaXMuc3Vic2NyaWJlclBhY2thZ2VzLnB1c2goe3N1YnNjcmliZXIsIGlzRmluYWxseSwgb25GdWxmaWxsLCBvblJlamVjdH0pO1xyXG5cclxuICAgIGlmICh0aGlzLmlzRnVsZmlsbGVkKCkgfHwgdGhpcy5pc1JlamVjdGVkKCkpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm5vdGlmeVN1YnNjcmliZXJzKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdWJzY3JpYmVyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBub3RpZnlTdWJzY3JpYmVycyAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBwcm9wYWdhdGVTdWNjZXNzID0gIHRoaXMuc3RhdGUgIT09IEd3UHJvbWlzZVN0YXRlLlJFSkVDVEVEO1xyXG4gICAgdGhpcy5zdWJzY3JpYmVyUGFja2FnZXMuZm9yRWFjaCgoc3Vic2NyaWJlclBhY2thZ2UpID0+IHtcclxuICAgICAgY29uc3QgY2FsbGJhY2sgPSBwcm9wYWdhdGVTdWNjZXNzID8gc3Vic2NyaWJlclBhY2thZ2Uub25GdWxmaWxsIDogc3Vic2NyaWJlclBhY2thZ2Uub25SZWplY3Q7XHJcbiAgICAgIGxldCBlcnJvcjtcclxuICAgICAgbGV0IGZpbmFsVmFsdWUgPSB0aGlzLnJlc3VsdDtcclxuXHJcbiAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBmaW5hbFZhbHVlID0gY2FsbGJhY2sodGhpcy5yZXN1bHQpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIGVycm9yID0gZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHN1YnNjcmliZXIgPSBzdWJzY3JpYmVyUGFja2FnZS5zdWJzY3JpYmVyO1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBzdWJzY3JpYmVyLmJlUmVqZWN0ZWQoZXJyb3IpO1xyXG4gICAgICB9IGVsc2UgaWYgKHByb3BhZ2F0ZVN1Y2Nlc3MpIHtcclxuICAgICAgICBzdWJzY3JpYmVyLmJlUmVzb2x2ZWQoZmluYWxWYWx1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3Vic2NyaWJlci5iZVJlamVjdGVkKGZpbmFsVmFsdWUsIGZhbHNlLCBjYWxsYmFjayAmJiAhc3Vic2NyaWJlclBhY2thZ2UuaXNGaW5hbGx5KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zdWJzY3JpYmVyUGFja2FnZXMubGVuZ3RoID0gMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBzcGVjcyByZXF1aXJlIHN1cHBvcnQgZm9yIG5vbiBQcm9taXNlIG9iamVjdHMgdGhhdCBzdGlsbCBzdXBwb3J0IGNhbGxpbmcgLnRoZW4oKVxyXG4gICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAqIEByZXR1cm5zIHt2YWx1ZSBpcyBJR3dUaGVuYWJsZX1cclxuICAgKi9cclxuICBzdGF0aWMgaXNUaGVuYWJsZSAodmFsdWU6IGFueSk6IHZhbHVlIGlzIElHd1RoZW5hYmxlIHtcclxuICAgIHJldHVybiB0aGlzLmlzT2JqZWN0T3JGdW5jdGlvbih2YWx1ZSkgJiYgdGhpcy5pc0Z1bmN0aW9uKCh2YWx1ZSBhcyBhbnkpLnRoZW4pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXNlcyBcImhpZGRlblwiIHByaXZhdGUgdmFyaWFibGUgdG8gZW5zdXJlIHRoYXQgbG9ja2luZyBpbiBpcyBhIG9uZS13YXkgZG9vclxyXG4gICAqIFRoaXMgaXMgbW9zdGx5IGp1c3QgZXh0cmEgYXJtb3IgdG8gZW5zdXJlIHRoZSBndXRzIG9mIHRoZSBwcm9taXNlIGFyZSBmdW5jdGlvbmluZyBjb3JyZWN0bHkuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBsb2NrSW4gKCk6IHZvaWQge1xyXG4gICAgKHRoaXMgYXMgYW55KS5fbG9ja2VkSW4gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0xvY2tlZEluICgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhISh0aGlzIGFzIGFueSkuX2xvY2tlZEluO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHN0YXRlICgpOiBHd1Byb21pc2VTdGF0ZSB7XHJcbiAgICByZXR1cm4gKHRoaXMgYXMgYW55KS5fc3RhdGUgfHwgR3dQcm9taXNlU3RhdGUuUEVORElORztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZXMgXCJoaWRkZW5cIiBwcml2YXRlIHZhcmlhYmxlIHRvIGVuc3VyZSB0aGF0IHNldHRpbmcgc3RhdGUgY2FuIG9ubHkgYWR2YW5jZVxyXG4gICAqIFRocm93cyB3aGVuIHRyeWluZyB0byBzZXQgc3RhdGUsIGFuZCB0aGUgc3RhdGUgaXMgYWxyZWFkeSBzb21ldGhpbmcgb3RoZXIgdGhhbiBwZW5kaW5nXHJcbiAgICogVGhpcyBpcyBtb3N0bHkganVzdCBleHRyYSBhcm1vciB0byBlbnN1cmUgdGhlIGd1dHMgb2YgdGhlIHByb21pc2UgYXJlIGZ1bmN0aW9uaW5nIGNvcnJlY3RseVxyXG4gICAqIEBwYXJhbSB7R3dQcm9taXNlU3RhdGV9IHN0YXRlXHJcbiAgICovXHJcbiAgc2V0IHN0YXRlIChzdGF0ZTogR3dQcm9taXNlU3RhdGUpIHtcclxuICAgIGlmICh0aGlzLmlzU2V0dGxlZCgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkF0dGVtcHRlZCB0byBzZXQgc3RhdGUgb24gYSBwcm9taXNlIHRoYXQncyBhbHJlYWR5IGJlZW4gc2V0dGxlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgKHRoaXMgYXMgYW55KS5fc3RhdGUgPSBzdGF0ZTtcclxuICAgIHRoaXMubG9ja0luKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCByZWN1cnNpdmVseSBpZiB0aGUgdmFsdWUgaW4gYSB0aGVuYWJsZS5cclxuICAgKiBIb3dldmVyLCB0aGlzIGNvdWxkIGJlIGNhbGxlZCBtdWx0aXBsZSB0aW1lcyBkdXJpbmcgYSBcInJhY2VcIi4gQnV0IHdlIG9ubHkgd2FudCB0aGUgZmlyc3Qgb25lIHRvIHByb2NlZWQuXHJcbiAgICogU28gd2UgdGVsbCB0aGUgcHJvbWlzZSB0aGF0IGl0J3MgYmVlbiBcImxvY2tlZCBpblwiIG9uY2UgdGhpcyBoYXMgYmVlbiBjYWxsZWQgb25jZSBhbmQgd2UgYmFpbCBvbiBzdWJzZXF1ZW50IGNhbGxzLlxyXG4gICAqIEJ1dCBpZiB0aGUgdmFsdWUgaXMgYSBwcm9taXNlLi4udGhlbiBpdCB3YW50cyB0byBjYWxsIHRoaXMgcmVjdXJzaXZlbHkuLi5zbyB3ZSBnaXZlIGl0IHRoZSBcImZvcmNlVG9SdW5FdmVuSWZMb2NrZWRcIiBvcHRpb25cclxuICAgKlxyXG4gICAqIEBwYXJhbSB0aGVuYWJsZU9yVmFsdWVcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGZvcmNlVG9SdW5FdmVuSWZMb2NrZWRcclxuICAgKiBAcmV0dXJucyB7dGhpc31cclxuICAgKi9cclxuICBwcml2YXRlIGJlUmVzb2x2ZWQgKHRoZW5hYmxlT3JWYWx1ZTogYW55LCBmb3JjZVRvUnVuRXZlbklmTG9ja2VkOiBib29sZWFuID0gZmFsc2UpOiB0aGlzIHtcclxuICAgIGlmICh0aGVuYWJsZU9yVmFsdWUgPT09IHRoaXMpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHJlc29sdmUgYSBwcm9taXNlIHdpdGggaXRzZWxmLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1VubGVzcyB0aGUgY2hhaW4gb2YgcmVzb2x1dGlvbiBoYXMgY2FsbGVkIHRoaXMgbWV0aG9kIHdpdGggXCJmb3JjZVRvUnVuRXZlbklmTG9ja2VkXCIgdGhlbiBiYWlsIGlmIGxvY2tlZFxyXG4gICAgaWYgKCFmb3JjZVRvUnVuRXZlbklmTG9ja2VkICYmIHRoaXMuaXNMb2NrZWRJbigpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFsd2F5cyBiYWlsIGlmIHdlJ3JlIGFscmVhZHkgc2V0dGxlZFxyXG4gICAgaWYgKHRoaXMuaXNTZXR0bGVkKCkpIHtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sb2NrSW4oKTtcclxuXHJcbiAgICBpZiAoR3dQcm9taXNlLmlzVGhlbmFibGUodGhlbmFibGVPclZhbHVlKSkge1xyXG4gICAgICB0aGVuYWJsZU9yVmFsdWUudGhlbigodmFsKSA9PiB0aGlzLmJlUmVzb2x2ZWQodmFsLCB0cnVlKSwgKHZhbCkgPT4gdGhpcy5iZVJlamVjdGVkKHZhbCwgdHJ1ZSkpO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN0YXRlID0gR3dQcm9taXNlU3RhdGUuRlVMRklMTEVEO1xyXG4gICAgdGhpcy5yZXN1bHQgPSB0aGVuYWJsZU9yVmFsdWU7XHJcblxyXG4gICAgdGhpcy5ub3RpZnlTdWJzY3JpYmVycygpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJlUmVqZWN0ZWQgKHJlYXNvbjogYW55LCBmb3JjZVRvUnVuRXZlbklmTG9ja2VkOiBib29sZWFuID0gZmFsc2UsIHJlamVjdGlvbldhc0hhbmRsZWQ6IGJvb2xlYW4gPSBmYWxzZSk6IHRoaXMge1xyXG4gICAgaWYgKHJlYXNvbiA9PT0gdGhpcykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcmVzb2x2ZSBhIHByb21pc2Ugd2l0aCBpdHNlbGYuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vVW5sZXNzIHRoZSBjaGFpbiBvZiByZXNvbHV0aW9uIGhhcyBjYWxsZWQgdGhpcyBtZXRob2Qgd2l0aCBcImZvcmNlVG9SdW5FdmVuSWZMb2NrZWRcIiB0aGVuIGJhaWwgaWYgbG9ja2VkXHJcbiAgICBpZiAoIWZvcmNlVG9SdW5FdmVuSWZMb2NrZWQgJiYgdGhpcy5pc0xvY2tlZEluKCkpIHtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWx3YXlzIGJhaWwgaWYgd2UncmUgYWxyZWFkeSBzZXR0bGVkXHJcbiAgICBpZiAodGhpcy5pc1NldHRsZWQoKSkge1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxvY2tJbigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHJlamVjdGlvbldhc0hhbmRsZWQgPyBHd1Byb21pc2VTdGF0ZS5SRUpFQ1RFRF9CVVRfSEFORExFRCA6IEd3UHJvbWlzZVN0YXRlLlJFSkVDVEVEO1xyXG4gICAgdGhpcy5yZXN1bHQgPSByZWFzb247XHJcblxyXG4gICAgdGhpcy5ub3RpZnlTdWJzY3JpYmVycygpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBnZXRSZXN1bHQgKCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBpc1NldHRsZWQgKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNGdWxmaWxsZWQoKSB8fCB0aGlzLmlzUmVqZWN0ZWQoKTtcclxuICB9XHJcblxyXG4gIGlzUGVuZGluZyAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gR3dQcm9taXNlU3RhdGUuUEVORElORztcclxuICB9XHJcblxyXG4gIGlzRnVsZmlsbGVkICgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBHd1Byb21pc2VTdGF0ZS5GVUxGSUxMRUQ7XHJcbiAgfVxyXG5cclxuICBpc1JlamVjdGVkICgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBHd1Byb21pc2VTdGF0ZS5SRUpFQ1RFRCB8fCB0aGlzLnN0YXRlID09PSBHd1Byb21pc2VTdGF0ZS5SRUpFQ1RFRF9CVVRfSEFORExFRDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGlzT2JqZWN0T3JGdW5jdGlvbiAodmFsOiBhbnkpOiB2YWwgaXMgb2JqZWN0IHwgRnVuY3Rpb24ge1xyXG4gICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWw7XHJcbiAgICByZXR1cm4gdmFsICE9PSBudWxsICYmICh0eXBlID09PSBcIm9iamVjdFwiIHx8IHR5cGUgPT09IFwiZnVuY3Rpb25cIik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBpc0Z1bmN0aW9uICh2YWw6IGFueSk6IHZhbCBpcyBGdW5jdGlvbiB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJmdW5jdGlvblwiO1xyXG4gIH1cclxufVxyXG5cclxuLy8gUG9seWZpbGxcclxuaWYgKHdpbmRvdyAmJiB0eXBlb2YgKHdpbmRvdyBhcyBhbnkpLlByb21pc2UgIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICh3aW5kb3cgYXMgYW55KS5Qcm9taXNlID0gR3dQcm9taXNlO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RzL2VtYmVkZGVkL0d3UHJvbWlzZS50cyJdLCJzb3VyY2VSb290IjoiIn0=