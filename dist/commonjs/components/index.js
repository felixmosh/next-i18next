"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get Link () {
        return _Link.default;
    },
    get NextStaticProvider () {
        return _NextStaticProvider.default;
    }
});
const _Link = /*#__PURE__*/ _interop_require_default(require("./Link"));
const _NextStaticProvider = /*#__PURE__*/ _interop_require_default(require("./NextStaticProvider"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
