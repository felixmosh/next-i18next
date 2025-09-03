"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Link: function() {
        return _Link.default;
    },
    NextStaticProvider: function() {
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
