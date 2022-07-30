/*
    Symbols
    
    It is a way to create unique pair of key-value datatype.
*/

const id1 = Symbol('id');
console.log(id1);
const id2 = Symbol('id');
console.log(id2);
// As you can see, every Symbol is unique.
// No matter if they're using the same name or not.
console.log(id1 === id2);
console.log(id1 == id2);
// A Symbol is always unique
console.log(Symbol() === Symbol());

/*
    Sharing Symbols through the Global Symbol Registry
*/
// The global Symbol registry es where all the runtime
// environment symbols are stored. I.E: the Symbol iterator
// We can access to the Global Registry Symbols by using the
// Symbol method for, which will retrieve the symbol
// belonging to the entered keyword.
console.log(Symbol.for('interator'));

// for method is not only used to get Symbols, but to create them too
// Every time we pass through a keyword that did not exist in the 
// Global registry a new symbol will be created by using it.
Symbol.for('This is my Symbol');
console.log(Symbol.for('This is my Symbol'));

// Since the Global Registry stores unique data, ther's no possibility
// to create two different Symbols with the same keyword, it would not
// be possible to retrieve them without conflicts. So Global Registry
// only allows one Symbol per keyword
console.log(Symbol.for('This is my Symbol') === Symbol.for('This is my Symbol'));

/*
    Symbols and Objects

    Symbols can work as keys in objects; nevertheless, they won't
    be listed.
*/
const sayHello = Symbol('action');
const user = {}

user[sayHello] = () => console.log('Hellooo')
user[sayHello]()
console.log(user[sayHello]);
// Although we're able to retrieve the values from a symbol key
// the the symbols values are not listed. It's not possible
// to iterate over them.
console.log(Object.values(user));

/* Differences with not enumarable property */
Object.defineProperty(user, "action", {
    enumerable:false,
    value: () => console.log('hello')
})
user.action();
// In this case is not possible to iterate over a non enumerable
// Object property
console.log(Object.values(user));
// nevertheless, its possible to get the values by using the keyword
console.log(user['action']);
// By using symbol keys is not possible to access the value
// with the keyword, pass the unique symbol itself is a must
// console.log(user['sayHello']) // this code will fail
console.log(user[sayHello]);

/*
    Use Cases

    Symbols were introduced to JS to make the old code
    complatible with the new versions of it.
*/

const person = {}
// Imagine that we create the frist version of SayBay
const sayBay = Symbol('sayBay');
person[sayBay] = () => console.log('Bay');
// But we want to do some change to the function 
// Keeping the compatibility with old versions
// By using symbols we can still refers to the 
// object with the same keyword
const sayBayV2 = Symbol('sayBay');
person[sayBay2] = () => console.log('Bay version 2');



