import i18n from 'i18next';
import i18nextHTTPBackend from 'i18next-http-backend';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
export default function(config) {
    var initPromise;
    if (!i18n.isInitialized) {
        if (!process.browser) {
            var i18nextFSBackend = require('i18next-fs-backend/cjs');
            var i18nextMiddleware = require('i18next-http-middleware/cjs');
            i18n.use(i18nextFSBackend);
            if (config.serverLanguageDetection) {
                var serverDetectors = new i18nextMiddleware.LanguageDetector();
                config.customDetectors.forEach(function(detector) {
                    return serverDetectors.addDetector(detector);
                });
                i18n.use(serverDetectors);
            }
        } else {
            i18n.use(i18nextHTTPBackend);
            if (config.browserLanguageDetection) {
                var browserDetectors = new I18nextBrowserLanguageDetector();
                config.customDetectors.forEach(function(detector) {
                    return browserDetectors.addDetector(detector);
                });
                i18n.use(browserDetectors);
            }
        }
        config.use.forEach(function(x) {
            return i18n.use(x);
        });
        initPromise = i18n.init(config);
    }
    return {
        i18n: i18n,
        initPromise: initPromise
    };
};
