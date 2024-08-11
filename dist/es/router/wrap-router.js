/*
  This `Router` is a wrap of the standard
  NextJs `Router`, with some simple lang
  redirect logic in place.

  If you haven't already, read this issue comment:
  https://github.com/zeit/next.js/issues/2833#issuecomment-414919347

  Very important: if you import `Router` from NextJs directly,
  and not this file, your lang subpath routing will break.
*/ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
import NextRouter from 'next/router';
import { lngPathCorrector, subpathIsRequired } from '../utils';
var propertyFields = [
    'pathname',
    'route',
    'query',
    'asPath',
    'components',
    'events'
];
var coreMethods = [
    'reload',
    'back',
    'beforePopState',
    'ready',
    'prefetch'
];
var wrappedMethods = [
    'push',
    'replace'
];
export var wrapRouter = function(nextI18NextInternals) {
    var Router = {};
    propertyFields.forEach(function(field) {
        Object.defineProperty(Router, field, {
            get: function get() {
                return NextRouter[field];
            }
        });
    });
    coreMethods.forEach(function(method) {
        var _NextRouter;
        Router[method] = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return (_NextRouter = NextRouter)[method].apply(_NextRouter, _to_consumable_array(args));
        };
    });
    wrappedMethods.forEach(function(method) {
        Router[method] = function(path, as, options) {
            var config = nextI18NextInternals.config, i18n = nextI18NextInternals.i18n;
            if (subpathIsRequired(config, i18n.languages[0])) {
                var _lngPathCorrector = lngPathCorrector(config, {
                    as: as,
                    href: path
                }, i18n.languages[0]), correctedAs = _lngPathCorrector.as, correctedHref = _lngPathCorrector.href;
                return NextRouter[method](correctedHref, correctedAs, options);
            }
            return NextRouter[method](path, as, options);
        };
    });
    return Router;
};
