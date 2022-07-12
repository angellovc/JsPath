#!/usr/bin/env node

/*
    Some static methods were added to the Object class
    The most commons:
*/


const cat = {
    name: "Bobby",
    age: 3,
    description: `${this.name} is beauty cat`
}
console.log("Object: "+ cat);

// It is possible to convert an object into a matrix
const catMatrix = Object.entries(cat);
console.log(cat);

// Get the values or keys of the object
const catKeys = Object.keys(cat);
const catValues = Object.values(cat);

console.log(catKeys, catValues);