#!/usr/bin/env node

/*
    Local variable refers to those varaibles that
    are dependable on some context, for example,
    the varaible variable is declared outside and
    inside the function, but those behave
    different, because the first is global, but 
    the second one was defined inside the function
    so it will only last always it is inside the
    function
*/
var variable = "Im a global variable"
function printMessage() {
    var variable = "Im a local variable";
    console.log(variable);
}
printMessage();
console.log(variable);


/*
    There are two kind of local varaibles
    Function variables that refers to those
    functions that are encapsulated inside
    function and cannot be used outside it
*/
const fruits = () => {
    var fruit = "Im a fruit";
}

fruits();
// console.log(fruit);

/*
    There other kind of local scope is the 
    block scope. It refers to those elements
    that are dependend just in the context in 
    which they have been declared 
*/
const anotherFruits = () => {

    if (true) {
        /*
            Let are the stants for lexical context
            which means that lex variables only can
            be used in the context in which they have
            been declared. In this case fuit variable
            was declared inside a conditional context,
            so it can be used just inside that scope.

            Var in other hand does not make the variable
            dependent on the context in which it has been
            declared

            Let is the best practice, because it fails
            when declared twice 
        */
        let fruit = "I'm a fruit";
        var vegetables = "I'm a vegetable";
    }
    console.log(vegetables);
    console.log(fruit);
}

anotherFruits();

