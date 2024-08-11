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
    addSubpath: function() {
        return _addsubpath.addSubpath;
    },
    consoleMessage: function() {
        return _consolemessage.consoleMessage;
    },
    isServer: function() {
        return _isserver.isServer;
    },
    lngFromReq: function() {
        return _lngfromreq.lngFromReq;
    },
    lngPathCorrector: function() {
        return _lngpathcorrector.lngPathCorrector;
    },
    lngsToLoad: function() {
        return _lngstoload.lngsToLoad;
    },
    redirectWithoutCache: function() {
        return _redirectwithoutcache.redirectWithoutCache;
    },
    removeSubpath: function() {
        return _removesubpath.removeSubpath;
    },
    subpathFromLng: function() {
        return _subpathfromlng.subpathFromLng;
    },
    subpathIsPresent: function() {
        return _subpathispresent.subpathIsPresent;
    },
    subpathIsRequired: function() {
        return _subpathisrequired.subpathIsRequired;
    }
});
var _addsubpath = require("./add-subpath");
var _consolemessage = require("./console-message");
var _isserver = require("./is-server");
var _lngfromreq = require("./lng-from-req");
var _lngpathcorrector = require("./lng-path-corrector");
var _lngstoload = require("./lngs-to-load");
var _redirectwithoutcache = require("./redirect-without-cache");
var _removesubpath = require("./remove-subpath");
var _subpathfromlng = require("./subpath-from-lng");
var _subpathispresent = require("./subpath-is-present");
var _subpathisrequired = require("./subpath-is-required");
