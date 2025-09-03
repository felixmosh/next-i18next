/*
  This `Link` component is a wrap of the standard
  NextJs `Link` component, with some simple lang
  redirect logic in place.

  If you haven't already, read this issue comment:
  https://github.com/zeit/next.js/issues/2833#issuecomment-414919347

  This component automatically provides this functionality:
  <Link href="/product?slug=something" as="/products/something">

  Wherein `slug` is actually our i18n lang, and it gets
  pulled automatically.

  Very important: if you import `Link` from NextJs directly,
  and not this file, your lang subpath routing will break.
*/ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, /*
  Usage of `withTranslation` here is just to
  force `Link` to rerender on language change
*/ "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _link = /*#__PURE__*/ _interop_require_default(require("next/link"));
const _reacti18next = require("react-i18next");
const _utils = require("../utils");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const removeWithTranslationProps = (props)=>{
    const strippedProps = Object.assign({}, props);
    delete strippedProps.defaultNS;
    delete strippedProps.i18n;
    delete strippedProps.i18nOptions;
    delete strippedProps.lng;
    delete strippedProps.reportNS;
    delete strippedProps.t;
    delete strippedProps.tReady;
    delete strippedProps.forwardedRef;
    return strippedProps;
};
class Link extends _react.default.Component {
    static defaultProps = {
        as: undefined
    };
    render() {
        const { as, children, href, i18n, nextI18NextInternals, ...props } = this.props;
        const { config } = nextI18NextInternals;
        const { language } = i18n;
        if ((0, _utils.subpathIsRequired)(config, language)) {
            const { as: correctedAs, href: correctedHref } = (0, _utils.lngPathCorrector)(config, {
                as,
                href
            }, language);
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(_link.default, {
                href: correctedHref,
                as: correctedAs,
                ...removeWithTranslationProps(props),
                children: children
            });
        }
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_link.default, {
            href: href,
            as: as,
            ...removeWithTranslationProps(props),
            children: children
        });
    }
}
const _default = (0, _reacti18next.withTranslation)()(Link);
