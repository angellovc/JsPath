#!/usr/bin/env node

/*
    Static attributes or methods are those that could be accessed
    without instanciating an objects, but those that could be
    accessed directly from the function prototype
*/
function anything() {

}
anything.__proto__.f = () => console.log("this is f");

// in this case f is an example of static method
anything.f();


/*
    Also JS manage the access of the attributes of an object
    by using property descriptors. Every attribute inside an
    object has its own descriptors and those defines what we
    can do with that property
*/

const cat = {
    name: 'boby',
    age: 3
}
// This way we get every attribute of the cat class along with its own property descriptor
console.log(Object.getOwnPropertyDescriptors(cat));
/*  
    Attribute descriptor Example: age: { value: 3, writable: true, enumerable: true, configurable: true }

    - value: indicates what is stored in that attribute or variable
    - configurable: when this is false the variable cannot be eliminated
    - writable: value cannot be overwritten 
    - enumerable: indicates if that attribute is able to be treated as an iterable
    when it is disable, it won't appear in the list of values or keys of the object
    Object.keys(cat) won't list those that has this descriptor false
*/

// It is possible to define a property with its own descriptor
Object.defineProperty(cat, "description", {
    value: "I'm a fatty cat",
    writable: false,
    configurable: false,
    enumerable: false
});

console.log(Object.getOwnPropertyDescriptors(cat));
console.log(Object.keys(cat));
cat.description = "I'm a slim cat";
console.log(Object.getOwnPropertyDescriptors(cat));

// This we the configurable descriptor of all properties inside the object as false
Object.seal(cat);
console.log(Object.getOwnPropertyDescriptors(cat));

// This we the configurable and writable descriptor of all properties inside the object as false
Object.freeze(cat);
console.log(Object.getOwnPropertyDescriptors(cat));
