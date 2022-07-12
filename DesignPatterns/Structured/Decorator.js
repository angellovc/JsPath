#!/usr/bin/env node

/*
    Decorator 

    It is an structural pattern that receive a function or
    an object will perform some modifications to the function
    execution or to the object itself and will return a new
    function/object with new extended functionalities
*/

// In this case we have a function that returns a text 
// waving someone
function sayHello(name) {
    return 'Hello, ' + name;
}
  
// this decorator extend the functionality of the function above and
// change its behavior. Now the function not only say hello, but asks
// how are you?
function helloDecorator(f) {
    return function() {
    //   arguments is an Array-like object accessible inside functions
    // that contains the values of the arguments passed to that function
    // when we use positional arguments, the function will assign the
    // the positional arguments according to the order in the Array of
    // arguments[]
      const result = f.apply(this, arguments);
      return result + ". How are you?";
    }
}
  
  const decoratedHello = helloDecorator(sayHello);
  
  console.log("Function without decorator:", sayHello("Angel"));
  console.log("Function with decorator:", decoratedHello("Angel"));