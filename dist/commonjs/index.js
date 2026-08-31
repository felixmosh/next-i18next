"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return NextI18Next;
    },
    get withTranslation () {
        return _reacti18next.withTranslation;
    }
});
const _reacti18next = require("react-i18next");
const _hoistnonreactstatics = /*#__PURE__*/ _interop_require_default(require("hoist-non-react-statics"));
const _createconfig = require("./config/create-config");
const _createi18nextclient = /*#__PURE__*/ _interop_require_default(require("./create-i18next-client"));
const _hocs = require("./hocs");
const _utils = require("./utils");
const _components = require("./components");
const _router = require("./router");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class NextI18Next {
    Trans;
    Link;
    Router;
    i18n;
    initPromise;
    config;
    useTranslation;
    withTranslation;
    appWithTranslation;
    consoleMessage;
    withNamespaces;
    constructor(userConfig){
        this.config = (0, _createconfig.createConfig)(userConfig);
        this.consoleMessage = _utils.consoleMessage.bind(this);
        /* Validation */ this.withNamespaces = ()=>{
            throw new Error('next-i18next has upgraded to react-i18next v10 - please rename withNamespaces to withTranslation.');
        };
        const { i18n, initPromise } = (0, _createi18nextclient.default)(this.config);
        this.i18n = i18n;
        this.initPromise = initPromise;
        this.appWithTranslation = _hocs.appWithTranslation.bind(this);
        this.withTranslation = (namespace, options)=>(Component)=>(0, _hoistnonreactstatics.default)((0, _reacti18next.withTranslation)(namespace, options)(Component), Component);
        const nextI18NextInternals = {
            config: this.config,
            i18n: this.i18n
        };
        this.Link = (0, _hocs.withInternals)(_components.Link, nextI18NextInternals);
        this.Router = (0, _router.wrapRouter)(nextI18NextInternals);
        /* Directly export `react-i18next` methods */ this.Trans = _reacti18next.Trans;
        this.useTranslation = _reacti18next.useTranslation;
    }
}
