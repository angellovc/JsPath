#!/usr/bin/env node

/*
    Javascript is not able to manage private
    variables; however, it's possible to
    simulate the private variables behavior
    by using clousures. 
*/

const person = () => {
    /*
        In this situation we will create a variable
        that just can be accessed by a function
    */
    let personName;
    return {
        getName: () => personName,
        setName: (name) => {personName = name}
    }
}

const carlos = person();
console.log(carlos.getName());
carlos.setName("Carlos");
console.log(carlos.getName());
