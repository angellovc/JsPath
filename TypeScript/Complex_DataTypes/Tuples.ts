/*
    Tuples

    In TS tuples are arrays whose elments are typed
*/

// This way we are indicating that the variable
// just will receive an array with a number
// in the 0 position a string in the 1 position
let tupleNumberString: [number, string] = [11, "stirng"];
/* we cannot do */
// let tupleNumberString: [number, string] = [11, "stirng", "das"];
// let tupleNumberString: [number, string] = [];

/*
    Matrix Tuple

    It is also possible to create a matrix tuple
*/
let matrixTuple: [number, string][] = [];
matrixTuple.push([1, "string"]);
matrixTuple.push([2, "string"]);
matrixTuple.push([3, "string"]);



