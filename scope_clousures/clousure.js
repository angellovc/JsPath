#!/usr/bin/env node

/*
    A clousure is a function capable to access to the
    context of the other function. Is a function returned
    by other function, but that has access to the 
    context of its parent function
*/

const basket = (content) => {
    // This is the function parent 
    let contentInBasket = content;
    // Parent function will return another function capable to access
    // to the parent scope 
    return () =>  {
        /*
            Sometimes when you work with a clousures you want to know
            the context or scope of the function while developing. to
            do this it is possible to use the JS reserved word
            debbuger that will stop in the place the word was placed
            and there you'll be able to access the conexted of the
            function in which it is located
        */
        // debugger
        console.log(`In this basket you have ${contentInBasket}`);
    }
}

const appleBasket = basket(["Pear", "Apple"]);
appleBasket();
const bananaBasket = basket("banana");
bananaBasket();