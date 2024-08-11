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
var removeSubpath = function(url, subpath) {
    return url.replace(subpath, '').replace(/(https?:\/\/)|(\/)+/g, "$1$2");
};
