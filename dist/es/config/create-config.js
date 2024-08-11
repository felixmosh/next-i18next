function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
import { defaultConfig } from './default-config';
import { consoleMessage } from '../utils';
var deepMergeObjects = [
    'backend',
    'detection'
];
var dedupe = function(names) {
    return names.filter(function(v, i) {
        return names.indexOf(v) === i;
    });
};
var STATIC_LOCALE_PATH = 'static/locales';
export var createConfig = function(userConfig) {
    if (typeof userConfig.localeSubpaths === 'string') {
        throw new Error('The localeSubpaths option has been changed to an object. Please refer to documentation.');
    }
    /*
    Initial merge of default and user-provided config
  */ var combinedConfig = _object_spread({}, defaultConfig, userConfig);
    /*
    Sensible defaults to prevent user duplication
  */ combinedConfig.allLanguages = dedupe(combinedConfig.otherLanguages.concat([
        combinedConfig.defaultLanguage
    ]));
    combinedConfig.whitelist = combinedConfig.allLanguages;
    var allLanguages = combinedConfig.allLanguages, defaultLanguage = combinedConfig.defaultLanguage, localeExtension = combinedConfig.localeExtension, localePath = combinedConfig.localePath, localeStructure = combinedConfig.localeStructure;
    if (!process.browser) {
        var fs = require('fs');
        var path = require('path');
        var serverLocalePath = path.isAbsolute(localePath) ? localePath : path.join(process.cwd(), localePath);
        /*
      Validate defaultNS
      https://github.com/isaachinman/next-i18next/issues/358
    */ if (typeof combinedConfig.defaultNS === 'string') {
            var defaultFile = path.join(defaultLanguage, "".concat(combinedConfig.defaultNS, ".").concat(localeExtension));
            var defaultNSPath = path.join(serverLocalePath, defaultFile);
            var defaultNSExists = fs.existsSync(defaultNSPath);
            if (!defaultNSExists) {
                /*
          If defaultNS doesn't exist, try to fall back to the deprecated static folder
          https://github.com/isaachinman/next-i18next/issues/523
        */ var staticDirPath = path.join(process.cwd(), STATIC_LOCALE_PATH, defaultFile);
                var staticDirExists = fs.existsSync(staticDirPath);
                if (staticDirExists) {
                    consoleMessage('warn', 'next-i18next: Falling back to /static folder, deprecated in next@9.1.*', combinedConfig);
                    serverLocalePath = STATIC_LOCALE_PATH;
                } else if (process.env.NODE_ENV !== 'production') {
                    throw new Error("Default namespace not found at ".concat(defaultNSPath));
                }
            }
        }
        /*
      Set server side backend
    */ combinedConfig.backend = {
            loadPath: path.join(serverLocalePath, "".concat(localeStructure, ".").concat(localeExtension)),
            addPath: path.join(serverLocalePath, "".concat(localeStructure, ".missing.").concat(localeExtension))
        };
        /*
      Set server side preload (languages and namespaces)
    */ combinedConfig.preload = allLanguages;
        if (!combinedConfig.ns) {
            var getAllNamespaces = function(p) {
                return fs.readdirSync(p).map(function(file) {
                    return file.replace(".".concat(localeExtension), '');
                });
            };
            combinedConfig.ns = getAllNamespaces(path.join(serverLocalePath, defaultLanguage));
        }
    } else {
        var clientLocalePath = localePath;
        /*
      Remove public prefix from client site config
    */ if (localePath.startsWith('public/')) {
            clientLocalePath = localePath.replace(/^public\//, '');
        }
        /*
      Set client side backend
    */ combinedConfig.backend = {
            loadPath: "".concat(clientLocalePath, "/").concat(localeStructure, ".").concat(localeExtension),
            addPath: "".concat(clientLocalePath, "/").concat(localeStructure, ".missing.").concat(localeExtension)
        };
        combinedConfig.ns = [
            combinedConfig.defaultNS
        ];
    }
    /*
    Set fallback language to defaultLanguage in production
  */ if (typeof userConfig.fallbackLng !== 'boolean' && !userConfig.fallbackLng) {
        combinedConfig.fallbackLng = process.env.NODE_ENV === 'production' ? combinedConfig.defaultLanguage : false;
    }
    /*
    Deep merge with overwrite - goes last
  */ deepMergeObjects.forEach(function(obj) {
        if (userConfig[obj]) {
            combinedConfig[obj] = _object_spread({}, defaultConfig[obj], userConfig[obj]);
        }
    });
    return combinedConfig;
};
