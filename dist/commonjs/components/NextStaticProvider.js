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
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reacti18next = require("react-i18next");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class NextStaticProvider extends _react.default.Component {
    static defaultProps = {
        tReady: true
    };
    render() {
        const { children, tReady } = this.props;
        return tReady ? children : null;
    }
}
const _default = (0, _reacti18next.withTranslation)()(NextStaticProvider);
