#!/usr/bin/env node

/*
    Not its possible to use the finally statement in promises
*/

const helloWorld = () => new Promise((resolve, reject) => setTimeout(() => true? resolve("Promise returned succesfully"): reject(new Error("Function failed"))), 3000);

// finally clause will be executed no matter the result of the promises
// finally will be executed always after any promise have returned
helloWorld().then(console.log).catch(console.log).finally(console.log("This is the end of the execution"));
