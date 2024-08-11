export var removeSubpath = function(url, subpath) {
    return url.replace(subpath, '').replace(/(https?:\/\/)|(\/)+/g, "$1$2");
};
