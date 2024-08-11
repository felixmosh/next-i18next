export var subpathFromLng = function(config, language) {
    if (typeof language !== 'string') {
        return null;
    }
    var subpath = config.localeSubpaths[language];
    if (typeof subpath !== 'string') {
        return null;
    }
    return subpath;
};
