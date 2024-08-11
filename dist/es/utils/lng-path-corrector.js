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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
import { format as formatUrl, parse as parseUrl } from 'url';
import { removeSubpath, subpathIsPresent, subpathIsRequired, subpathFromLng } from './index';
var parseAs = function(originalAs, href) {
    var asType = typeof originalAs === "undefined" ? "undefined" : _type_of(originalAs);
    var as;
    if (asType === 'undefined') {
        as = formatUrl(href, {
            unicode: true
        });
    } else if (asType === 'string') {
        as = originalAs;
    } else {
        throw new Error("'as' type must be 'string', but it is ".concat(asType));
    }
    return as;
};
var parseHref = function(originalHref) {
    var hrefType = typeof originalHref === "undefined" ? "undefined" : _type_of(originalHref);
    var href;
    if (hrefType === 'string') {
        href = parseUrl(originalHref, true);
    } else if (hrefType === 'object') {
        href = _object_spread({}, originalHref);
        href.query = originalHref.query ? _object_spread({}, originalHref.query) : {};
    } else {
        throw new Error("'href' type must be either 'string' or 'object', but it is ".concat(hrefType));
    }
    return href;
};
export var lngPathCorrector = function(config, currentRoute, currentLanguage) {
    var allLanguages = config.allLanguages, localeSubpaths = config.localeSubpaths;
    var originalAs = currentRoute.as, originalHref = currentRoute.href;
    if (!allLanguages.includes(currentLanguage)) {
        throw new Error('Invalid configuration: Current language is not included in all languages array');
    }
    var href = parseHref(originalHref);
    var as = parseAs(originalAs, href);
    /*
    url.format prefers the 'url.search' string over
    the 'url.query' object, so remove the search
    string to ensure the query object is used.
  */ delete href.search;
    /*
    Strip any/all subpaths from the `as` value
  */ Object.values(localeSubpaths).forEach(function(subpath) {
        if (subpathIsPresent(as, subpath)) {
            as = removeSubpath(as, subpath);
        }
    });
    if (subpathIsRequired(config, currentLanguage)) {
        var basePath = "".concat(href.protocol, "//").concat(href.host);
        var currentAs = as.replace(basePath, '');
        var subpath = subpathFromLng(config, currentLanguage);
        as = "/".concat(subpath).concat(currentAs).replace(/\/$/, '');
        href.query.lng = currentLanguage;
        href.query.subpath = subpath;
    }
    return {
        as: as,
        href: href
    };
};
