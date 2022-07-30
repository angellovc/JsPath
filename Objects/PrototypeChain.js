/*
    Prototype Chain

    It refers to the chain of references of prototypes
    of an object.
*/

/*
    Function in charge of returning the prototype chain
    of an object in a human readable way
*/
function tracePrototypeChainOf(object) {
    var proto = Object.getPrototypeOf(object);
    var result = '';

    while (proto) {
        result += ' -> ' + proto.constructor.name;
        proto = Object.getPrototypeOf(proto)
    }

    return result;
}

// When we create a instance of Date
// We get an object whose prototype is equal to Date
// and as Data is an object the Date prototype is
// the Object prototype. It is what we call the 
// prototype chain. When you assign a prototype to an object
// it contains a reference to its parent prototype, creating
// a chain of references until you reach the last object prototype
// which is the one common to every JS object: Object Prototype.
const date = new Date();
const prototypes = tracePrototypeChainOf(date);
console.log(prototypes);