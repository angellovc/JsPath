#!/usr/bin/env node

const cat = {
    name: "Boby",
    age: 3
}

// We can convert an object into a matrix
const catMatrix = Object.entries(cat);
console.log(catMatrix);

// We can convert objects from matrix
const catObject = Object.fromEntries(catMatrix);
console.log(catObject);
