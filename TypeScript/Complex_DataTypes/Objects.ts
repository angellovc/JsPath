#!/usr/bin/env node

/*
    Object

    When we are using objects, it is not necessary
    to use :object
    
    Since every object is different TS will type
    the object as it was declared. If you declare
    cat by having name string type, it will always
    will require a name attribute in the cat object
*/

let cat = {
    name: "Bob",
    age: 3
}
// It is forbidden, because doesn't fit with
// the object declared for cat variable 
// cat.name = 10;

console.log(cat.name);

// If we put this, we are telling TS will create
// an object in which we cannot acess to their
// attributes
let obj: object = {name: "Anything"};
// console.log(obj.name);