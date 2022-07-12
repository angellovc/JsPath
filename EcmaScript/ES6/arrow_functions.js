#!/usr/bin/env node


const f = x => x * x 

console.log(f(2));

const g = (x, y) => x + y;

console.log(g(1, 2));

const sayHelloTo = (name) => {
    let sayHello = `Hello ${name}`;
    console.log(sayHello);
    return sayHello;
}