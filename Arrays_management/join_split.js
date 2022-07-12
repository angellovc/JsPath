#!/usr/bin/env node

/*
    Join and Split are sides of the same coin

    Join will create a string from an array
    Split will create an array from a string
*/

const greeting = ["Hello", "My", "name", "is"];

const afterJoin = greeting.join(" ");
console.log(afterJoin);

// you can also change the separator
console.log(greeting.join("+"));
// or eliminate the separator
console.log(greeting.join(""));

const afterSplit = afterJoin.split(" ");
console.log(afterSplit);