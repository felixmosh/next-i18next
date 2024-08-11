export var lngFromReq = function(req) {
    if (!req.i18n) {
        return null;
    }
    var _req_i18n_options = req.i18n.options, allLanguages = _req_i18n_options.allLanguages, defaultLanguage = _req_i18n_options.defaultLanguage, fallbackLng = _req_i18n_options.fallbackLng;
    var fallback = fallbackLng || defaultLanguage;
    if (!req.i18n.languages) {
        return typeof fallback === 'string' ? fallback : null;
    }
    var language = req.i18n.languages.find(function(l) {
        return allLanguages.includes(l);
    }) || fallback;
    if (typeof language === 'string') {
        return language;
    }
    return null;
};
