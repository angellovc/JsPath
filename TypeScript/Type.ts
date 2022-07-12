/*
    Types union

    Sometimes we can expect a value that comes
    in two or more different forms, so we need
    to tell TS that both values are availables
*/

// In this case the function receive both string or number
function union(something: string | number): string {
    return "Your argument was "+something
}

/*
    Alias

    We can use Type to create an alias
    For example, imagine we have an union
    but that union is too long, we can create
    an alias for the union
*/
type alias = string | number| string[];

function unionWithAlias(something: alias): alias {
    return something
}

/*
    Type Literals

    This is mostly used to specify that the variable value
    could be any of the strings inside the types
*/
type figures = "square" | "triangle" | "circle";
let square: figures = "square";
// square = "another";

type numberList = 1 | 2 | 3 | 4;
let n: numberList = 3;
// n = 5;

