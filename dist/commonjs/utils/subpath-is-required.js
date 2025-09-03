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
const subpathIsRequired = (config, language)=>typeof config.localeSubpaths[language] === 'string';
