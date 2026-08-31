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
const _i18next = /*#__PURE__*/ _interop_require_default(require("i18next"));
const _i18nexthttpbackend = /*#__PURE__*/ _interop_require_default(require("i18next-http-backend"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (config)=>{
    let initPromise;
    if (!_i18next.default.isInitialized) {
        if (!process.browser) {
            const i18nextFSBackend = require('i18next-fs-backend/cjs');
            const i18nextMiddleware = require('i18next-http-middleware/cjs');
            _i18next.default.use(i18nextFSBackend);
            if (config.serverLanguageDetection) {
                const serverDetectors = new i18nextMiddleware.LanguageDetector();
                config.customDetectors.forEach((detector)=>serverDetectors.addDetector(detector));
                _i18next.default.use(serverDetectors);
            }
        } else {
            _i18next.default.use(_i18nexthttpbackend.default);
        }
        config.use.forEach((x)=>_i18next.default.use(x));
        initPromise = _i18next.default.init(config);
    }
    return {
        i18n: _i18next.default,
        initPromise
    };
};
