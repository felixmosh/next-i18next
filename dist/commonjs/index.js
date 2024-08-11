"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return NextI18Next;
    },
    withTranslation: function() {
        return _reacti18next.withTranslation;
    }
});
var _reacti18next = require("react-i18next");
var _hoistnonreactstatics = /*#__PURE__*/ _interop_require_default(require("hoist-non-react-statics"));
var _createconfig = require("./config/create-config");
var _createi18nextclient = /*#__PURE__*/ _interop_require_default(require("./create-i18next-client"));
var _hocs = require("./hocs");
var _utils = require("./utils");
var _components = require("./components");
var _router = require("./router");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var NextI18Next = function NextI18Next(userConfig) {
    "use strict";
    _class_call_check(this, NextI18Next);
    _define_property(this, "Trans", void 0);
    _define_property(this, "Link", void 0);
    _define_property(this, "Router", void 0);
    _define_property(this, "i18n", void 0);
    _define_property(this, "initPromise", void 0);
    _define_property(this, "config", void 0);
    _define_property(this, "useTranslation", void 0);
    _define_property(this, "withTranslation", void 0);
    _define_property(this, "appWithTranslation", void 0);
    _define_property(this, "consoleMessage", void 0);
    _define_property(this, "withNamespaces", void 0);
    this.config = (0, _createconfig.createConfig)(userConfig);
    this.consoleMessage = _utils.consoleMessage.bind(this);
    /* Validation */ this.withNamespaces = function() {
        throw new Error('next-i18next has upgraded to react-i18next v10 - please rename withNamespaces to withTranslation.');
    };
    var _createI18NextClient = (0, _createi18nextclient.default)(this.config), i18n = _createI18NextClient.i18n, initPromise = _createI18NextClient.initPromise;
    this.i18n = i18n;
    this.initPromise = initPromise;
    this.appWithTranslation = _hocs.appWithTranslation.bind(this);
    this.withTranslation = function(namespace, options) {
        return function(Component) {
            return (0, _hoistnonreactstatics.default)((0, _reacti18next.withTranslation)(namespace, options)(Component), Component);
        };
    };
    var nextI18NextInternals = {
        config: this.config,
        i18n: this.i18n
    };
    this.Link = (0, _hocs.withInternals)(_components.Link, nextI18NextInternals);
    this.Router = (0, _router.wrapRouter)(nextI18NextInternals);
    /* Directly export `react-i18next` methods */ this.Trans = _reacti18next.Trans;
    this.useTranslation = _reacti18next.useTranslation;
};
