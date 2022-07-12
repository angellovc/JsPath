#!/usr/bin/env node

/*
    Now is it possible to create classes in JS
    since in any other language like Java
*/
class Cat {

    construtor(catName, age, description) {
        this._catName = catName;
        this._age = age;
        this._description = description;
    }

    set catName(catName) {
        this._catName = catName;
    }

    get catName () {
        return this._catName;
    }

}

// Also it is possible to export and import
// everything you have in a file: functions
// variables, classes, etc
export default Cat;