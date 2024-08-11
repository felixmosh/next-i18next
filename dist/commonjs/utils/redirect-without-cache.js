"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "redirectWithoutCache", {
    enumerable: true,
    get: function() {
        return redirectWithoutCache;
    }
});
var redirectWithoutCache = function(res, redirectLocation) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    res.redirect(302, redirectLocation);
};
