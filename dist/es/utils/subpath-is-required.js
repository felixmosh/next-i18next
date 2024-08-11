export var subpathIsRequired = function(config, language) {
    return typeof config.localeSubpaths[language] === 'string';
};
