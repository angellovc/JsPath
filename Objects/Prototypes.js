/*
    Prototype

    Prototype is the mechanism by which Javascript objects
    inherit features from others.
*/

// Object prototypes

// Every object in Javascript have a prototype in common
// The Object prototype. Every object inherit its properties
// and built-in from the Object prototype.
const obj = {
    name: 'Angello',
    greet: () => console.log('Hellow')
}
// How do we know the obj inherited properties from the Object prototype?
// It is because we have access to methods like toString and others. 
// If not where they came from?
console.log(obj.toString());
// No matter which object we're using, they share common properties
// provided by the Object prototype.
const obj2 = {}
// What happens is that every time I request a property or method
// from an object JS will search the property inside the object
// if it is not found, then it will search into its prototype
console.log(obj2.toString());

// We can also get the prototype of an object
// By using the function getPrototypeOf
const objPrototype = Object.getPrototypeOf(obj);
// The prototype is just another object
console.log(typeof objPrototype)
// How do we know whether it is the prototype of obj or not?
console.log(objPrototype.isPrototypeOf(obj));

