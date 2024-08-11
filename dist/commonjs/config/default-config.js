"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "defaultConfig", {
    enumerable: true,
    get: function() {
        return defaultConfig;
    }
});
var DEFAULT_LANGUAGE = 'en';
var OTHER_LANGUAGES = [];
var DEFAULT_NAMESPACE = 'common';
var LOCALE_PATH = 'public/static/locales';
var LOCALE_STRUCTURE = '{{lng}}/{{ns}}';
var LOCALE_EXTENSION = 'json';
var defaultConfig = {
    defaultLanguage: DEFAULT_LANGUAGE,
    otherLanguages: OTHER_LANGUAGES,
    load: 'currentOnly',
    localePath: LOCALE_PATH,
    localeStructure: LOCALE_STRUCTURE,
    localeExtension: LOCALE_EXTENSION,
    localeSubpaths: {},
    use: [],
    defaultNS: DEFAULT_NAMESPACE,
    interpolation: {
        escapeValue: false,
        formatSeparator: ',',
        format: function(value, format) {
            return format === 'uppercase' ? value.toUpperCase() : value;
        }
    },
    browserLanguageDetection: true,
    serverLanguageDetection: true,
    ignoreRoutes: [
        '/_next/',
        '/static/',
        '/public/',
        '/api/'
    ],
    customDetectors: [],
    detection: {
        lookupCookie: 'next-i18next',
        order: [
            'cookie',
            'header',
            'querystring'
        ],
        caches: [
            'cookie'
        ]
    },
    react: {
        wait: true,
        useSuspense: false
    },
    strictMode: true,
    errorStackTraceLimit: 0,
    shallowRender: false,
    get initImmediate () {
        return process.browser;
    }
};
