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
var _cjs = /*#__PURE__*/ _interop_require_default(require("i18next-http-middleware/cjs"));
var _pathmatch = /*#__PURE__*/ _interop_require_default(require("path-match"));
var _utils = require("../utils");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var route = (0, _pathmatch.default)();
function _default(nexti18next) {
    var config = nexti18next.config, i18n = nexti18next.i18n;
    var allLanguages = config.allLanguages, ignoreRoutes = config.ignoreRoutes, localeSubpaths = config.localeSubpaths;
    var isI18nRoute = function(req) {
        return ignoreRoutes.every(function(x) {
            return !req.url.startsWith(x);
        });
    };
    var localeSubpathRoute = route("/:subpath(".concat(Object.values(localeSubpaths).join('|'), ")(.*)"));
    var middleware = [];
    /*
    If not using server side language detection,
    we need to manually set the language for
    each request
  */ if (!config.serverLanguageDetection) {
        middleware.push(function(req, _res, next) {
            if (isI18nRoute(req)) {
                req.lng = config.defaultLanguage;
            }
            next();
        });
    }
    /*
    This does the bulk of the i18next work
  */ middleware.push(_cjs.default.handle(i18n));
    /*
    This does the locale subpath work
  */ middleware.push(function(req, res, next) {
        if (isI18nRoute(req) && req.i18n) {
            var currentLng = (0, _utils.lngFromReq)(req);
            var currentLngSubpath = (0, _utils.subpathFromLng)(config, currentLng);
            var currentLngRequiresSubpath = (0, _utils.subpathIsRequired)(config, currentLng);
            var currentLngSubpathIsPresent = (0, _utils.subpathIsPresent)(req.url, currentLngSubpath);
            var lngFromCurrentSubpath = allLanguages.find(function(l) {
                return (0, _utils.subpathIsPresent)(req.url, (0, _utils.subpathFromLng)(config, l));
            });
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
                var params = localeSubpathRoute(req.url);
                if (params !== false) {
                    var subpath = params.subpath;
                    req.query = _object_spread_props(_object_spread({}, req.query), {
                        subpath: subpath,
                        lng: currentLng
                    });
                    req.url = (0, _utils.removeSubpath)(req.url, subpath);
                }
            }
        }
        next();
    });
    return middleware;
}
