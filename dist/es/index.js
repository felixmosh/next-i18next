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
import { withTranslation, useTranslation, Trans } from 'react-i18next';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { createConfig } from './config/create-config';
import createI18NextClient from './create-i18next-client';
import { appWithTranslation, withInternals } from './hocs';
import { consoleMessage } from './utils';
import { Link } from './components';
import { wrapRouter } from './router';
export { withTranslation } from 'react-i18next';
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
    this.config = createConfig(userConfig);
    this.consoleMessage = consoleMessage.bind(this);
    /* Validation */ this.withNamespaces = function() {
        throw new Error('next-i18next has upgraded to react-i18next v10 - please rename withNamespaces to withTranslation.');
    };
    var _createI18NextClient = createI18NextClient(this.config), i18n = _createI18NextClient.i18n, initPromise = _createI18NextClient.initPromise;
    this.i18n = i18n;
    this.initPromise = initPromise;
    this.appWithTranslation = appWithTranslation.bind(this);
    this.withTranslation = function(namespace, options) {
        return function(Component) {
            return hoistNonReactStatics(withTranslation(namespace, options)(Component), Component);
        };
    };
    var nextI18NextInternals = {
        config: this.config,
        i18n: this.i18n
    };
    this.Link = withInternals(Link, nextI18NextInternals);
    this.Router = wrapRouter(nextI18NextInternals);
    /* Directly export `react-i18next` methods */ this.Trans = Trans;
    this.useTranslation = useTranslation;
};
export { NextI18Next as default };
