/*
    Prototypal Inheritance

    Prototypes is the mechanism JS uses to inherit
    one object characteristics to others. We can
    intensionally set the prototype of one object
    to add it the features we want.
*/

// Create Object Method

const Person = {
    sayHello: () => console.log('Hellow')
}
// By using the Object.create method a new object is created
// containing the object passed through as a prototype of it
const Student = Object.create(Person);
// Although student does not have a sayHello function
// person does, its prototype, for this reason it is able to use it
Student.sayHello();

// Assigning directly into the prototype
/*
    Its also possible to access the prototype of an
    object through the property __proto__ which is a
    reference to its prototype.
*/
// We know it is true, because we're able to access the
// toString method through the __proto__ property
const b= {}
console.log(b.__proto__.toString());
const a = {
    sayHello: () => console.log('Hellow')
}
// We can use the Object.assign method to attach every object
// or every object or function prototype into its own prototype
Object.assign(b.__proto__, a);
// After the assignement, b is now able to access sayHello
// it is because a is now part of its prototype. It inherited
// all of his functionalities
b.sayHello()

// Function prototype
/*
    This approach is clearly the most nearer to the
    class implementation in JS. The reason is because
    we are able to create an abstraction in capable
    of creating as many object instances we want
*/
function Warrior() {
    // by using this we attach every function or
    // variable as a propertie into its prototype
    this.whoAmI = function() {
        console.log("I'm a warrior");
    }
}

function Player() {
    this.play = function() {
        console.log("I'm playing...");
    }
}
// Each function is capable of creating object intances
// by setting as attributes the functions and variables
// added to its prototype
const player = new Player();

// Using the instanve of a Function prototype
// we can inherit all its attributes to another
// function prototype as in the code below
Object.assign(Warrior.prototype, player);

// Now the Warrior prototype has the Player attributes
// So the warrior instances are able to access both
// player and warrior attributes.
const warrior = new Warrior();
warrior.whoAmI()
warrior.play()



