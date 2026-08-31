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
    get appWithTranslation () {
        return _appwithtranslation.appWithTranslation;
    },
    get withInternals () {
        return _withinternals.withInternals;
    }
});
const _appwithtranslation = require("./app-with-translation");
const _withinternals = require("./with-internals");
