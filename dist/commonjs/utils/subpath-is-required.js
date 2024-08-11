"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "subpathIsRequired", {
    enumerable: true,
    get: function() {
        return subpathIsRequired;
    }
});
var subpathIsRequired = function(config, language) {
    return typeof config.localeSubpaths[language] === 'string';
};
