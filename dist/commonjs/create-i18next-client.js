"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _i18next = /*#__PURE__*/ _interop_require_default(require("i18next"));
var _i18nexthttpbackend = /*#__PURE__*/ _interop_require_default(require("i18next-http-backend"));
var _i18nextbrowserlanguagedetector = /*#__PURE__*/ _interop_require_default(require("i18next-browser-languagedetector"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _default = function(config) {
    var initPromise;
    if (!_i18next.default.isInitialized) {
        if (!process.browser) {
            var i18nextFSBackend = require('i18next-fs-backend/cjs');
            var i18nextMiddleware = require('i18next-http-middleware/cjs');
            _i18next.default.use(i18nextFSBackend);
            if (config.serverLanguageDetection) {
                var serverDetectors = new i18nextMiddleware.LanguageDetector();
                config.customDetectors.forEach(function(detector) {
                    return serverDetectors.addDetector(detector);
                });
                _i18next.default.use(serverDetectors);
            }
        } else {
            _i18next.default.use(_i18nexthttpbackend.default);
            if (config.browserLanguageDetection) {
                var browserDetectors = new _i18nextbrowserlanguagedetector.default();
                config.customDetectors.forEach(function(detector) {
                    return browserDetectors.addDetector(detector);
                });
                _i18next.default.use(browserDetectors);
            }
        }
        config.use.forEach(function(x) {
            return _i18next.default.use(x);
        });
        initPromise = _i18next.default.init(config);
    }
    return {
        i18n: _i18next.default,
        initPromise: initPromise
    };
};
