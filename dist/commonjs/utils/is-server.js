"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isServer", {
    enumerable: true,
    get: function() {
        return isServer;
    }
});
const isServer = ()=>typeof window === 'undefined';
