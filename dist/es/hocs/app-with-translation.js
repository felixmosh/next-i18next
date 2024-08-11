function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
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
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
import React from 'react';
import { withRouter } from 'next/router';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { I18nextProvider, withSSR } from 'react-i18next';
import { lngFromReq, lngPathCorrector, lngsToLoad } from '../utils';
import { NextStaticProvider } from '../components';
export var appWithTranslation = function appWithTranslation(WrappedComponent) {
    var WrappedComponentWithSSR = withSSR()(WrappedComponent);
    var _this = this, config = _this.config, consoleMessage = _this.consoleMessage, i18n = _this.i18n;
    var clientLoadNamespaces = function(lng, namespaces) {
        return Promise.all(namespaces.filter(function(ns) {
            return !i18n.hasResourceBundle(lng, ns);
        }).map(function(ns) {
            return i18n.reloadResources(lng, ns);
        }));
    };
    var AppWithTranslation = /*#__PURE__*/ function(_React_Component) {
        "use strict";
        _inherits(AppWithTranslation, _React_Component);
        var _super = _create_super(AppWithTranslation);
        function AppWithTranslation(props) {
            _class_call_check(this, AppWithTranslation);
            var _this = _super.call(this, props);
            if (process.browser) {
                var changeLanguageCallback = function(prevLng, newLng) {
                    var router = props.router;
                    var pathname = router.pathname, asPath = router.asPath, query = router.query;
                    var routeInfo = {
                        pathname: pathname,
                        query: query
                    };
                    if (i18n.initializedLanguageOnce && typeof newLng === 'string' && prevLng !== newLng) {
                        var _lngPathCorrector = lngPathCorrector(config, {
                            as: asPath,
                            href: routeInfo
                        }, newLng), as = _lngPathCorrector.as, href = _lngPathCorrector.href;
                        router.replace(href, as, {
                            shallow: config.shallowRender
                        });
                    }
                };
                var changeLanguage = i18n.changeLanguage.bind(i18n);
                i18n.changeLanguage = function() {
                    var _ref = _async_to_generator(function(newLng) {
                        var callback, prevLng, usedNamespaces;
                        var _arguments = arguments;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    callback = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : function() {
                                        return null;
                                    };
                                    prevLng = i18n.language;
                                    if (!(typeof newLng === 'string' && i18n.initializedLanguageOnce === true)) return [
                                        3,
                                        2
                                    ];
                                    usedNamespaces = Object.entries(i18n.reportNamespaces.usedNamespaces).filter(function(x) {
                                        return x[1] === true;
                                    }).map(function(x) {
                                        return x[0];
                                    });
                                    return [
                                        4,
                                        clientLoadNamespaces(newLng, usedNamespaces)
                                    ];
                                case 1:
                                    _state.sent();
                                    _state.label = 2;
                                case 2:
                                    return [
                                        2,
                                        changeLanguage(newLng, function() {
                                            changeLanguageCallback(prevLng, newLng);
                                            callback();
                                        })
                                    ];
                            }
                        });
                    });
                    return function(newLng) {
                        return _ref.apply(this, arguments);
                    };
                }();
            }
            return _this;
        }
        _create_class(AppWithTranslation, [
            {
                key: "render",
                value: function render() {
                    var _this_props = this.props, initialLanguage = _this_props.initialLanguage, initialI18nStore = _this_props.initialI18nStore, i18nServerInstance = _this_props.i18nServerInstance;
                    return /*#__PURE__*/ React.createElement(I18nextProvider, {
                        i18n: i18nServerInstance || i18n
                    }, /*#__PURE__*/ React.createElement(NextStaticProvider, null, /*#__PURE__*/ React.createElement(WrappedComponentWithSSR, _object_spread({
                        initialLanguage: initialLanguage,
                        initialI18nStore: initialI18nStore
                    }, this.props))));
                }
            }
        ], [
            {
                key: "getInitialProps",
                value: function getInitialProps(ctx) {
                    return _async_to_generator(function() {
                        var wrappedComponentProps, req, initialI18nStore, initialLanguage, i18nServerInstance, namespacesRequired, fallbackLng, languagesToLoad;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    wrappedComponentProps = {
                                        pageProps: {}
                                    };
                                    if (!WrappedComponent.getInitialProps) return [
                                        3,
                                        2
                                    ];
                                    return [
                                        4,
                                        WrappedComponent.getInitialProps(ctx)
                                    ];
                                case 1:
                                    wrappedComponentProps = _state.sent();
                                    _state.label = 2;
                                case 2:
                                    if (typeof wrappedComponentProps.pageProps === 'undefined') {
                                        consoleMessage('error', 'If you have a getInitialProps method in your custom _app.js file, you must explicitly return pageProps. For more information, see: https://github.com/zeit/next.js#custom-app');
                                    }
                                    /*
        Initiate vars to return
      */ req = ctx.ctx.req;
                                    initialI18nStore = {};
                                    initialLanguage = null;
                                    i18nServerInstance = null;
                                    if (!(!process.browser && req && req.i18n)) return [
                                        3,
                                        4
                                    ];
                                    initialLanguage = lngFromReq(req);
                                    /*
          Perform a lang change in case we're not on the right lang
        */ return [
                                        4,
                                        req.i18n.changeLanguage(initialLanguage)
                                    ];
                                case 3:
                                    _state.sent();
                                    return [
                                        3,
                                        5
                                    ];
                                case 4:
                                    if (Array.isArray(i18n.languages) && i18n.languages.length > 0) {
                                        initialLanguage = i18n.language;
                                    }
                                    _state.label = 5;
                                case 5:
                                    /*
        Step 2: Determine namespace dependencies
      */ namespacesRequired = config.ns;
                                    if (Array.isArray(wrappedComponentProps.pageProps.namespacesRequired)) {
                                        namespacesRequired = wrappedComponentProps.pageProps.namespacesRequired;
                                    } else {
                                        consoleMessage('warn', "You have not declared a namespacesRequired array on your page-level component: ".concat(ctx.Component.displayName || ctx.Component.name || 'Component', ". This will cause all namespaces to be sent down to the client, possibly negatively impacting the performance of your app. For more info, see: https://github.com/isaachinman/next-i18next#4-declaring-namespace-dependencies"));
                                    }
                                    /*
        We must always send down the defaultNS, otherwise
        the client will trigger a request for it and issue
        the "Did not expect server HTML to contain a <h1> in <div>"
        error
      */ if (typeof config.defaultNS === 'string' && !namespacesRequired.includes(config.defaultNS)) {
                                        namespacesRequired.push(config.defaultNS);
                                    }
                                    if (!(!process.browser && req && req.i18n)) return [
                                        3,
                                        6
                                    ];
                                    /*
          Detect the languages to load based upon the fallbackLng configuration
        */ fallbackLng = config.fallbackLng;
                                    languagesToLoad = lngsToLoad(initialLanguage, fallbackLng, config.otherLanguages);
                                    /*
          Initialise the store with the languagesToLoad and
          necessary namespaces needed to render this specific tree
        */ languagesToLoad.forEach(function(lng) {
                                        initialI18nStore[lng] = {};
                                        namespacesRequired.forEach(function(ns) {
                                            initialI18nStore[lng][ns] = (req.i18n.services.resourceStore.data[lng] || {})[ns] || {};
                                        });
                                    });
                                    return [
                                        3,
                                        8
                                    ];
                                case 6:
                                    if (!(Array.isArray(i18n.languages) && i18n.languages.length > 0)) return [
                                        3,
                                        8
                                    ];
                                    /*
          Load newly-required translations if changing route clientside
        */ return [
                                        4,
                                        clientLoadNamespaces(i18n.languages[0], namespacesRequired)
                                    ];
                                case 7:
                                    _state.sent();
                                    initialI18nStore = i18n.store.data;
                                    _state.label = 8;
                                case 8:
                                    /*
        Step 4: Overwrite i18n.toJSON method to be able to serialize the instance
      */ if (!process.browser && req && req.i18n) {
                                        req.i18n.toJSON = function() {
                                            return null;
                                        };
                                        i18nServerInstance = req.i18n;
                                    }
                                    /*
        `pageProps` will get serialized automatically by NextJs
      */ return [
                                        2,
                                        _object_spread({
                                            initialI18nStore: initialI18nStore,
                                            initialLanguage: initialLanguage,
                                            i18nServerInstance: i18nServerInstance
                                        }, wrappedComponentProps)
                                    ];
                            }
                        });
                    })();
                }
            }
        ]);
        return AppWithTranslation;
    }(React.Component);
    return hoistNonReactStatics(withRouter(AppWithTranslation), WrappedComponent, {
        getInitialProps: true
    });
};
