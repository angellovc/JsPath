"use strict";
/*
    Null and Undefined

    We can use null and undefined to type variables (which is not so usefull)
    and functions, but those are also sub types of any other data types
*/
function undef() {
    return undefined;
}
function nullab() {
    return null;
}
let something = "Something";
/*
    we can assign null or undefined for any kind of variable
    no matter which value this function is expecting
    but it won't work when stric mode is true
*/
// something = null;
// something = undefined;
