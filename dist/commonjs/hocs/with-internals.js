"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "withInternals", {
    enumerable: true,
    get: function() {
        return withInternals;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const withInternals = (WrappedComponent, config)=>{
    class WithInternals extends _react.default.Component {
        static displayName = `withnextI18NextInternals(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
        render() {
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(WrappedComponent, {
                ...this.props,
                nextI18NextInternals: config
            });
        }
    }
    return WithInternals;
};
