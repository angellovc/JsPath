#!/usr/bin/env node

function Fruit() {
    // When you don't attatch the variables to this, those won't be able to be accessed
    // It is a way to simulate private variables
    let _name = "";
    let _vitamines = [];

    // But it is possible to create getters and setters for those private variables
    // By attatching the getters and setters functions to this using the defineProperty
    Object.defineProperty(this, "name", {
        get() {
            return _name;
        },
        set(newName) {
            _name = newName;
        }
    });

    Object.defineProperty(this, "vitamines", {
        get() {
            return _vitamines;
        },
        set(vitamines) {
            _vitamines = vitamines;
        }
    });

}

const apple = new Fruit();
apple.name = "Apple";
console.log(apple.name);

