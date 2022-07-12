#!/usr/bin/env node

/*
    Static methods are created by attatching the method
    to the function prototype itself, not to the prototype
    of the function as happens when you attatch something
    to this.
*/
function Fruit(name = "apple") {
    // It will add name to the prototype of the function
    this.name = name;
}
// It will add sayHello to the function itself, this way
// sayHello is able to be used without an instance of Fruit
// without using the prototype, which is involve in the process
// of creating a new instance. This way it is no necessary
Fruit.sayHello = function () {console.log("Hellow")}; 

Fruit.sayHello();