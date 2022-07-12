"use strict";
/*
    Void

    It is mostly used for funcions that won't return anything
*/
function x() {
    console.log('return void');
}
x();
// In strict mode, you cannot use void to return null
// meanwhile without strict mode null and undefined
// are allowed
function y() {
    //    return null;
    return undefined;
}
// We can type a function to indicate that
// it will return a null instead of a undefined
function nullable() { return null; }
