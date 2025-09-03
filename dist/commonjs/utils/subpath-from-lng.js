"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "subpathFromLng", {
    enumerable: true,
    get: function() {
        return subpathFromLng;
    }
});
const subpathFromLng = (config, language)=>{
    if (typeof language !== 'string') {
        return null;
    }
    const subpath = config.localeSubpaths[language];
    if (typeof subpath !== 'string') {
        return null;
    }
    return subpath;
};
