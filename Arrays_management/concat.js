#!/usr/bin/env node

/*
    Concat inmutable

    This statement is used to cocat two different arrays
    and will return a new one based on the two of them
    received
*/

const groundAnimals = ["Cat", "Dog"];
const flyAnimals = ["Bird", "Eagle"];

const animals = groundAnimals.concat(flyAnimals);
console.log(groundAnimals);
console.log(flyAnimals);
console.log(animals);
console.log('-_----_--_-----')
// We know it is a new array, because if we affect it
// no other array will be affected
animals.push("Lion");
console.log(groundAnimals, flyAnimals, animals);

// it is also possible
const spreadAnimals = [...groundAnimals, ...flyAnimals];
console.log(spreadAnimals);