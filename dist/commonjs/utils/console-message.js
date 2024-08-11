/* eslint-disable no-console */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "consoleMessage", {
    enumerable: true,
    get: function() {
        return consoleMessage;
    }
});
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var messageTypes = {
    error: 'error',
    info: 'info',
    warn: 'warn'
};
Object.freeze(messageTypes);
var logMessage = function(messageType, message) {
    if (Object.values(messageTypes).includes(messageType)) {
        console[messageType](message);
    } else {
        console.info(message);
    }
};
var consoleMessage = function consoleMessage(messageType, message) {
    var config = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.config;
    var errorStackTraceLimit = config.errorStackTraceLimit, strictMode = config.strictMode;
    var prevStackLimit = Error.stackTraceLimit;
    var util;
    if (!strictMode) {
        return;
    }
    if (process.env.NODE_ENV !== 'production') {
        util = require('util');
    } else {
        return;
    }
    /*
    Temporarily set the stacktrace to 0 or errorStackTraceLimit,
    in order to only display a message
  */ Error.stackTraceLimit = errorStackTraceLimit;
    /*
    Make room for new message
  */ console.log();
    /*
    Make sure the message is a string
  */ if (typeof message !== 'string') {
        var metaError = new Error();
        metaError.name = 'Meta';
        metaError.message = "Param message needs to be of type: string. Instead, '".concat(typeof message === "undefined" ? "undefined" : _type_of(message), "' was provided.\n\n------------------------------------------------\n\n​\n        The provided ").concat(typeof message === "undefined" ? "undefined" : _type_of(message), ":\n\n​\n          ").concat(util.inspect(message, true, 8, true), "\n​\n------------------------------------------------\n\n    ");
        console.error(metaError);
        return;
    }
    /*
    Log the message to console
  */ logMessage(messageType, message);
    /*
    Reset stack limit
  */ Error.stackTraceLimit = prevStackLimit;
};
