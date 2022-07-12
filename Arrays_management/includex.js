#!/usr/bin/env node

/*
    Includes works for both: arrays and strings

    It checks that an array or a string has a specific value
    It just apply for primitive values arrays: booleans, stirngs, numbers, etc.
    won't works for object arrays
*/

const numbers = ["Hello", "Hola", "Bonjour"];

console.log(numbers.includes("Hello"));

const name = "Bobby The Cat";
console.log(name.includes("The"));