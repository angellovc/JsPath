#!/usr/bin/env node


/*
    Spread operator is used to copy objects in depth
    not just the reference

    sintaxis {...objectToCopy} or [...objectToCopy]
*/

let cat = {name: "boby", age: 10};

let catCopy = {...cat};

console.log(cat, catCopy);

//When you change the object both are different because they're not referring to the same address
catCopy.description = "A cute cat";
console.log(cat, catCopy);

/*
    Also is it possible to use spread oprator in between
    an object assignation
*/
let newCat = {race: "Tuxedo" ,...cat};
console.log(newCat);