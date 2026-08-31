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
    get addSubpath () {
        return _addsubpath.addSubpath;
    },
    get consoleMessage () {
        return _consolemessage.consoleMessage;
    },
    get isServer () {
        return _isserver.isServer;
    },
    get lngFromReq () {
        return _lngfromreq.lngFromReq;
    },
    get lngPathCorrector () {
        return _lngpathcorrector.lngPathCorrector;
    },
    get lngsToLoad () {
        return _lngstoload.lngsToLoad;
    },
    get redirectWithoutCache () {
        return _redirectwithoutcache.redirectWithoutCache;
    },
    get removeSubpath () {
        return _removesubpath.removeSubpath;
    },
    get subpathFromLng () {
        return _subpathfromlng.subpathFromLng;
    },
    get subpathIsPresent () {
        return _subpathispresent.subpathIsPresent;
    },
    get subpathIsRequired () {
        return _subpathisrequired.subpathIsRequired;
    }
});
const _addsubpath = require("./add-subpath");
const _consolemessage = require("./console-message");
const _isserver = require("./is-server");
const _lngfromreq = require("./lng-from-req");
const _lngpathcorrector = require("./lng-path-corrector");
const _lngstoload = require("./lngs-to-load");
const _redirectwithoutcache = require("./redirect-without-cache");
const _removesubpath = require("./remove-subpath");
const _subpathfromlng = require("./subpath-from-lng");
const _subpathispresent = require("./subpath-is-present");
const _subpathisrequired = require("./subpath-is-required");
