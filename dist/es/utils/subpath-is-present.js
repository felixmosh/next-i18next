import { parse as parseUrl } from 'url';
export var subpathIsPresent = function(url, subpath) {
    if (typeof url !== 'string' || typeof subpath !== 'string') {
        return false;
    }
    var pathname = parseUrl(url).pathname;
    return typeof pathname === 'string' && (pathname.length === subpath.length + 1 && pathname === "/".concat(subpath) || pathname.startsWith("/".concat(subpath, "/")));
};
