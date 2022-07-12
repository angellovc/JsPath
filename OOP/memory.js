#!/usr/bin/env node

/*
    JS memory management

    Js has two kind of memory: stack and heap.
    Stack memory is a very organized memory,
    but it does not have a lot space, It has a
    small amount of space to store simple
    values as: strings, numbers or booleans

    Heap, in other hand, is a non structured
    memory it's not as fast as stack memory,
    but has a lot of space
*/

/*
    Every time we declare (initialize) a
    variable the name of that variable is
    created and stored in the stack memory
    and if the variable value it's a
    primitive one, the value will be stored
    in the stack memory too
*/
let myName = "Angello";
let yourName = myName;
console.log(myName, yourName);
// We can add a primitive value to our variables and that value will be stored in the stack
// when you asign one variable value to another, you'll asign the same stack value to both
yourName = "AnotherName"
console.log(myName, yourName);


/*
    But it is different when you asign objects.
    Objects are stored in the heap memory, so
    when you declare an object, the name of it
    is created in the stack memory, but that name
    will have associated a heap memory address

    So when you asign that object to another object
    you are not asigning the value inside that object
    variable, you are asgigning a memory address
*/
const cat = {
    name: 'Bobby',
    age: 1
}

let catCopy = cat;
console.log(cat, catCopy);

// That is the reason why, when you asign an object an modify it
// the object in both variables will change, because both are pointing
// to the same heap memory slot
catCopy.age = 3;
console.log(cat, catCopy);

// The best way to copy objects is by using JSON

catCopy = JSON.parse(JSON.stringify(cat));
console.log(cat, catCopy);
catCopy.age = 6;
catCopy.name = "Bobo";
console.log(cat, catCopy);
