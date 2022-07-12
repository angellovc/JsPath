#!/usr/bin/env node

/*
    Private methods in classes

    JS is now able to manage private methods in classes
*/

class Cat {

    constructor(name) {
        this._name = name;
    }

    // By using '#', we can create private mathods
    #sayHello() {
        console.log("Hello, mi name is "+ this._name);
    }

    hello() {
        this.#sayHello();
    }
}

const boby = new Cat("Boby");
// Just the function inside the Class can have access to the private methods
boby.hello();

boby.sayHello();

