#!/usr/bin/env node


/*
    When any argument is passed to the function
    it is possible to set a default value
*/

function f(x = 1) {
    console.log(x);
    return x**2;
} 

f();

f(2);