#!/usr/bin/env node
/*
    every is similar to some, but in this case
    it will return true when all the items inside
    the array accomplished with the condition
*/
const numbers = [2,4,1,6,8,10];


// Check that all values in the numbers array
// are even

console.log(numbers.every(number => number % 2 === 0));

