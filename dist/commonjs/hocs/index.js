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
    appWithTranslation: function() {
        return _appwithtranslation.appWithTranslation;
    },
    withInternals: function() {
        return _withinternals.withInternals;
    }
});
const _appwithtranslation = require("./app-with-translation");
const _withinternals = require("./with-internals");
