#!/usr/bin/env node

/*
    Optional Chaining

    This is used, for example, when we want to access the
    elements inside an object, but you are not sure if that
    element exists there, so you use ? before chaining the
    second element
*/
const cat = {
    name: 'Boby'
}

console.log(cat.name);
console.log(cat.age?.age);
// If we don't use the optional chaining, we'll get an error
console.log(cat.age.age);