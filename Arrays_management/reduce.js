#!/usr/bin/env node
/*
    Reduce

    This function is used to reduce the elements in
    one array to one result. It's so useful to do sumations
*/


const numbers = [1,2,3,4,5];

// The first argument of the function is the result of the execution
// and the second argument is the array element
const sumation = numbers.reduce((acumulatedResult, number) => acumulatedResult + number);
console.log(sumation);


const animals = ["dog", "dog", "cat", "rat", "cat", "dog"];

const howMany = animals.reduce((accumulatedAnimals, animal) => {
    if (!accumulatedAnimals[animal] ) {
        accumulatedAnimals[animal] = 1;
    } else {
        accumulatedAnimals[animal] = accumulatedAnimals[animal] + 1;
    }
    return accumulatedAnimals;
}, {} /* Here you can specify the kind of dataType you want to return or how do you want first argument to behaves */);

console.log(howMany);
