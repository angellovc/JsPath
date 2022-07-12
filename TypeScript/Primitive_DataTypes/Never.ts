/*
    Never

    It is used for functions we know that won't return anything
    including undefined and null
*/

// The only two function that don't return anything
// is functions that just throw errors or that has an
// infinite loop
function customError(message: string): never {
    throw Error(message);
}


function program(): never {
    while(true) {
    }
}

