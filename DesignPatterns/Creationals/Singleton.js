#!/usr/bin/env node
/*
    Singleton is creational pattern used to
    always return just one instance of a class

    TypeScript is perfect to do this implementation
    instead of JS, because TS offers the possibility
    to use access modifiers
*/
var Singleton = /** @class */ (function () {
    // In this case it is better off to use TS instead of JS
    // because in singleton pattern the constructor must be
    // private and you cannot modify the access in JS
    function Singleton() {
        this._attr = "This is an attr";
    }
    Object.defineProperty(Singleton.prototype, "attr", {
        get: function () {
            return this._attr;
        },
        set: function (newAttr) {
            this._attr = newAttr;
        },
        enumerable: false,
        configurable: true
    });
    Singleton.getInstance = function () {
        if (this.instance == undefined)
            this.instance = new Singleton();
        return this.instance;
    };
    return Singleton;
}());
var a = Singleton.getInstance();
var b = Singleton.getInstance();
console.log(a === b);
console.log(a.attr);
