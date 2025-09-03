/*
  This `Router` is a wrap of the standard
  NextJs `Router`, with some simple lang
  redirect logic in place.

  If you haven't already, read this issue comment:
  https://github.com/zeit/next.js/issues/2833#issuecomment-414919347

  Very important: if you import `Router` from NextJs directly,
  and not this file, your lang subpath routing will break.
*/ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "wrapRouter", {
    enumerable: true,
    get: function() {
        return wrapRouter;
    }
});
const _router = /*#__PURE__*/ _interop_require_default(require("next/router"));
const _utils = require("../utils");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const propertyFields = [
    'pathname',
    'route',
    'query',
    'asPath',
    'components',
    'events'
];
const coreMethods = [
    'reload',
    'back',
    'beforePopState',
    'ready',
    'prefetch'
];
const wrappedMethods = [
    'push',
    'replace'
];
const wrapRouter = (nextI18NextInternals)=>{
    const Router = {};
    propertyFields.forEach((field)=>{
        Object.defineProperty(Router, field, {
            get () {
                return _router.default[field];
            }
        });
    });
    coreMethods.forEach((method)=>{
        Router[method] = (...args)=>_router.default[method](...args);
    });
    wrappedMethods.forEach((method)=>{
        Router[method] = (path, as, options)=>{
            const { config, i18n } = nextI18NextInternals;
            if ((0, _utils.subpathIsRequired)(config, i18n.languages[0])) {
                const { as: correctedAs, href: correctedHref } = (0, _utils.lngPathCorrector)(config, {
                    as,
                    href: path
                }, i18n.languages[0]);
                return _router.default[method](correctedHref, correctedAs, options);
            }
            return _router.default[method](path, as, options);
        };
    });
    return Router;
};
