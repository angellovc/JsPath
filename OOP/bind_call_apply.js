#!/usr/bin/env node

/*
    Function context
*/

// the context of the function, when this is not being called
// from an object, is always the global object
function y() {
    console.log(this);
}

function x() {
    console.log(this);
    // Also when a function is called inside another function
    // it will receive the scope the function that have called
    // it along with the global object context
    y();
}

x();

// When you say x.call() is equal to say x()
// when a function is executed it call the method call and will pass to it
// the arguments and the context of the object that have called the function
x.call();

const cat = {
    name: 'Bob',
    age: 3
}

// but you can pass another context to the function
x.call(/*this first argument is the context */ cat /* the next arguments are the arguments of the function itself */);

x.apply(cat /*it is the same as call, but the arguments are expected to be sent in a list */);

// also you can just bind something to the context of a function by using the statement bind
// it will return the same function but with the defined context
const yNewContext = y.bind(cat);
yNewContext();