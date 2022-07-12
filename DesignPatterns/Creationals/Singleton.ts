#!/usr/bin/env node

/*
    Singleton is creational pattern used to
    always return just one instance of a class

    TypeScript is perfect to do this implementation
    instead of JS, because TS offers the possibility
    to use access modifiers
*/

class Singleton {
    private static instance: Singleton;
    private _attr;
    // In this case it is better off to use TS instead of JS
    // because in singleton pattern the constructor must be
    // private and you cannot modify the access in JS
    private constructor() {
        this._attr = "This is an attr";
    }

    get attr() {
        return this._attr;
    }

    set attr(newAttr) {
        this._attr = newAttr;
    }

    static getInstance(): Singleton {
        if (this.instance == undefined)
            this.instance = new Singleton(); 
        return this.instance;
    }
}

const a = Singleton.getInstance();
const b = Singleton.getInstance();
console.log(a === b);

console.log(a.attr);
