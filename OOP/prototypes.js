#!/usr/bin/env node

/*
    Normally, high level abstraction programming languages
    are object oriented based on classes, but it is not the
    JS case. In JS is an object oriented programming language
    based on prototypes
*/

/*
    Prototypes are created by using JS functions instead of
    classes.  
 */

/*
    It is a function prototype: a function that will be used as a prototype
    to create objects
*/
function Person(name = "no name") {
    // this keyword will attach the parameter to the context of the function
    // so that every time this function is instanciated it will use the context
    // of the variables stored
    // It is a ways to simulate classes in JS
    this.name = name;
    this.sayHello = () => console.log("Hello there");
}

function f(x) {
    return x**2
}

/*
    When you instanciate a function this way, JS will use its
    attributes and functions inside it, JS will use the
    context of the function, and will call the object
    prototype to create an object by using this context 
*/
const carlos = new Person("Carlos");

console.log(typeof Person);
// This ways, person is no longer a function, its an object
// but with all the context inside it and can be used as a
// class with attributes (this.name) and methods (this.sayHello)
console.log(typeof carlos);
console.log(typeof f);


/*
    In javascript everything is an object, because every data
    type is build as an object with its own attrinbutes or
    methods

    Strings, Numbers, objects, arrays, etc are all of them
    objects. All of them inherit from the prototype Object
    which is the mother prototype in charge to create all
    inside JS
*/

// In JS all the attributes inside an object are stored
// into the __proto__, every object in JS have one
// This way the instance of a function prototype 
// preserve the methods and attributes inside it 
carlos.__proto__.sayBye = () => console.log("Good Bye")
carlos.sayBye();

// The object parent of every object in javascript is also a function prototype
console.log(typeof Object);

/*
    Function prototypes are usefull to create models of different kind of objects
*/

//Arrays also are objects created by a function prototype Array()

const myArray = new Array();
myArray.push("one");
myArray.push("two");
myArray.push("three");

console.log(myArray);
//since arrays are objects, they are composed by key/value pairs
//the only difference is that in this case the keys are numbers
console.log(Object.keys(myArray));
// also it is possible to attach functions to an array
// since arrays are objects
myArray.__proto__.whatIAm = () => console.log("I'm an Array");
myArray.whatIAm();

// ES6 has introduced the classes to js 
// Since then we don't need function
// prototypes anymore
class Personae {
    constructor(name= undefined) {
        this._name = name;
    }

    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
}

const g = new f();

function fg(number) {
    // This will attatch the attributes and function to the
    // prototype of the function 
    // but if you decide not to use it, you'll get an attribute
    // value attached to the context of the function
    // but that is not possible to be accessed by outside the function or instance
    number

    this.printNumber = () => console.log(number);
    this.changeNumber = (newNumber) => number = newNumber;
}

const cc = new fg(1);
cc.printNumber();
cc.changeNumber(3);
cc.printNumber();
console.log(cc.number);