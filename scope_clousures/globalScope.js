#!/usr/bin/env node
/*
    The scope is in charge to decide
    block of code able to access to a variable
*/
/*
    Global Scope variables are those
    variables that aren't dependable 
    of any block of code and  could 
    be accessed in any part of the 
    program

    In general terms Global variables should be avoided
*/
var globalVarible = "I'm a global variable"

const helloWorld = () => {
    /*
        The context in which the variable globalVarible 
        have been declared is outside the function, in
        the root of the document, so any stuff inside this
        document could use it
    */
    console.log(globalVarible);
}

function globalVariableInsideFunction() {
    /*
        another way to create global variable is by not put
        var before a variable inside a function
        so when this function is executed
        the function without a type will be attached to the
        global scope: window in case of browser or document
        in case of nodeJs

        It is a bad practice an should be avoided
    */
    globalVariableInFunction = "I'm a global variable inside a function"
}
helloWorld();
globalVariableInsideFunction();
console.log(globalVariableInFunction);