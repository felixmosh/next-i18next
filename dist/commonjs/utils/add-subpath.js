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
const addSubpath = (url, subpath)=>url.replace('/', `/${subpath}/`).replace(/(https?:\/\/)|(\/)+/g, "$1$2").replace(/\/$/, '');
