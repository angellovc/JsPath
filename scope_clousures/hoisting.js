#!/usr/bin/env node

/*
    Hoistin is the phenomena in which no matter in which part
    of the file a function or variable was declared, JS
    always will put that declaration at the begining before
    any code execution. That's the reason why the code below
    does not fail.
*/
// var a
a = 2;
var a;
console.log(a);


console.log(f(2));
function f(x) {return x**2}

console.log(g(2));

var g = (x) => x*2;
// Nonetheles it is failing and that is because JS just apply 
// the hoisting to the declarations, but in this case we are doing
// two things, frist declaration which is const g and the second
// one asignation = () => {}

// An another important thing is that it does not work for LET and CONST variables
b = 2;
let b;
console.log(b);
