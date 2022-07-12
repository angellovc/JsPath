/*
    Cast

    We can cast variables to make them act
    as if they were from another type

    It could be done by using angular brakets
    or as notation
*/


let castToString: any;
castToString = "String";

// Thi way, IDE won't recognize the string methods
// because TS does not recognize the variable as a
// string type variable
castToString;
// But if we cast the variable with string type
// the string methods will be shown by the IDE
console.log((castToString as string).length);
console.log((<string>castToString).length);


