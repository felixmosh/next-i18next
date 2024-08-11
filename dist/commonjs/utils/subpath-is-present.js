"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "subpathIsPresent", {
    enumerable: true,
    get: function() {
        return subpathIsPresent;
    }
});
var _url = require("url");
var subpathIsPresent = function(url, subpath) {
    if (typeof url !== 'string' || typeof subpath !== 'string') {
        return false;
    }
    var pathname = (0, _url.parse)(url).pathname;
    return typeof pathname === 'string' && (pathname.length === subpath.length + 1 && pathname === "/".concat(subpath) || pathname.startsWith("/".concat(subpath, "/")));
};
