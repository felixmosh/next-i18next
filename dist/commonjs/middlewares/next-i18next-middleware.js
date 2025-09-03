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
const _cjs = /*#__PURE__*/ _interop_require_default(require("i18next-http-middleware/cjs"));
const _pathmatch = /*#__PURE__*/ _interop_require_default(require("path-match"));
const _utils = require("../utils");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const route = (0, _pathmatch.default)();
function _default(nexti18next) {
    const { config, i18n } = nexti18next;
    const { allLanguages, ignoreRoutes, localeSubpaths } = config;
    const isI18nRoute = (req)=>ignoreRoutes.every((x)=>!req.url.startsWith(x));
    const localeSubpathRoute = route(`/:subpath(${Object.values(localeSubpaths).join('|')})(.*)`);
    const middleware = [];
    /*
    If not using server side language detection,
    we need to manually set the language for
    each request
  */ if (!config.serverLanguageDetection) {
        middleware.push((req, _res, next)=>{
            if (isI18nRoute(req)) {
                req.lng = config.defaultLanguage;
            }
            next();
        });
    }
    /*
    This does the bulk of the i18next work
  */ middleware.push(_cjs.default.handle(i18n, {
        ignoreRoutes
    }));
    /*
    This does the locale subpath work
  */ middleware.push((req, res, next)=>{
        if (isI18nRoute(req) && req.i18n) {
            let currentLng = (0, _utils.lngFromReq)(req);
            const currentLngSubpath = (0, _utils.subpathFromLng)(config, currentLng);
            const currentLngRequiresSubpath = (0, _utils.subpathIsRequired)(config, currentLng);
            const currentLngSubpathIsPresent = (0, _utils.subpathIsPresent)(req.url, currentLngSubpath);
            const lngFromCurrentSubpath = allLanguages.find((l)=>(0, _utils.subpathIsPresent)(req.url, (0, _utils.subpathFromLng)(config, l)));
            if (lngFromCurrentSubpath !== undefined && lngFromCurrentSubpath !== currentLng) {
                /*
          If a user has hit a subpath which does not
          match their language, give preference to
          the path, and change user language.
        */ req.i18n.changeLanguage(lngFromCurrentSubpath);
                currentLng = lngFromCurrentSubpath;
            } else if (currentLngRequiresSubpath && !currentLngSubpathIsPresent) {
                /*
          If a language subpath is required and
          not present, prepend correct subpath
        */ return (0, _utils.redirectWithoutCache)(res, (0, _utils.addSubpath)(req.url, currentLngSubpath));
            }
            /*
        If a locale subpath is present in the URL,
        modify req.url in place so that NextJs will
        render the correct route
      */ if (typeof lngFromCurrentSubpath === 'string') {
                const params = localeSubpathRoute(req.url);
                if (params !== false) {
                    const { subpath } = params;
                    req.query = {
                        ...req.query,
                        subpath,
                        lng: currentLng,
                        __nextLocale: currentLng,
                        __nextDefaultLocale: config.defaultLanguage
                    };
                    req.url = (0, _utils.removeSubpath)(req.url, subpath);
                }
            }
        }
        next();
    });
    return middleware;
}
