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
const _url = require("url");
const subpathIsPresent = (url, subpath)=>{
    if (typeof url !== 'string' || typeof subpath !== 'string') {
        return false;
    }
    const { pathname } = (0, _url.parse)(url);
    return typeof pathname === 'string' && (pathname.length === subpath.length + 1 && pathname === `/${subpath}` || pathname.startsWith(`/${subpath}/`));
};
