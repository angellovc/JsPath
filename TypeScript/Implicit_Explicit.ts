#!/usr/bin/env node

//  Implicit VS Explicit

/*
    Explicit assignation 

    When we are using explicit assignation, we explicitly tell the
    compiller what kind of value the variable is expected to receive

*/
// In this case we are explicitly telling the compiller
// that this variable just receive Strings
let explicit: string = "Bobby";
// If you try to assign another kind of data type
// youll get an error

// explicit = true;


/*
    Implicit assignation

    When you don't specify the kind of valua a variable expect
    TypeScript will do it for you implicitly by using the
    first value that was assign
*/
// In this case, the first value assigned to the variable
// is an string, so TypeScript won't accept that variable
// to be assigned by other value
let implicit = "Bob";
//implicit = 1

/* 
    Any 

    If we don't assign a variable in the moment in which
    it is declared, TypeScript will declare the function
    as any, which means that variable will receive any 
    kind of value
*/

let any;
// it is equal to: let any: any;
any = "Anything";
any = 1;
any = true


