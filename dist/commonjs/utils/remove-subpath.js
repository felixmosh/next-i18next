"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "removeSubpath", {
    enumerable: true,
    get: function() {
        return removeSubpath;
    }
});
const removeSubpath = (url, subpath)=>url.replace(subpath, '').replace(/(https?:\/\/)|(\/)+/g, "$1$2");
