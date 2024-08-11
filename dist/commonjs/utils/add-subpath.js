"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addSubpath", {
    enumerable: true,
    get: function() {
        return addSubpath;
    }
});
var addSubpath = function(url, subpath) {
    return url.replace('/', "/".concat(subpath, "/")).replace(/(https?:\/\/)|(\/)+/g, "$1$2").replace(/\/$/, '');
};
