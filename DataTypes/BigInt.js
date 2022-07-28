/*
    BigInt

    This is a new datatype that allows JS to handle very big numbers.
    Before the BigInt implementation, JS was only able to handle with
    accuracy the numbers from -9007199254740991 to 9007199254740991.
*/

// If you take close look on this comparison, you'll notice that both numbers
// are different, nevertheless the result is true. It is because JS lose
// accuracy working with numbers greater or lesser than the followings
Number.MAX_SAFE_INTEGER;
Number.MIN_SAFE_INTEGER;

console.log(90071992547409923 === 90071992547409922);

/*
    Implicit Cohercion

    When working with BigInts the implicit cohercion does not
    apply. If we try to perform arithmetic operations or use
    the Math library functions over the BigInt numbers, because
    you'll get an error.
*/
// const bigInt = BigInt(1);
// const sum = bigInt + 1;
// Math.log10(100n);

/*
    In case you want to perform operations over BigInts and Numbers
    you will have to convert one of the datatypes explicitly to get
    them equal
*/
const x = 100n;
const y = 100;
let result = x + BigInt(y); 
// OR
/*
    You can convert your BigInt number into a Number, but
    take in mind that its risky action. Becasue Number is
    not able to handle the numbers BigInt datatype is able.

    So if your BigInt number is greater than the one Number
    datatype can handle, you'll lose part of the number in
    order to make it fit into the Number. 

*/
result = Number(x) + y; 


/*
    Comparisons

    Although we cannot perform mathematical operations over BigInts and Numbers
    its possible to compare them without converting them.
*/

console.log(10n < 100);


/*
    Conditionals

    Every number different from zero will be interpreted
    as a true and zero is taken as false
*/
if (-10n) console.log("Will be executed");
if (0n) console.log("Won't be executed");
if (1n) console.log("Will be executed");
console.log(Boolean(-10n))
console.log(Boolean(10n))
console.log(Boolean(0n))
