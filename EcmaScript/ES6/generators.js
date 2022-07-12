#!/usr/bin/env node

function* counter() {
    yield 1; 
    yield 2; 
    yield 3; 
    yield 4; 
    yield 5; 
}

const count = counter();
for (let i = 0; i < 5; i++) {

    console.log(count.next().value);

}

function *counterWithLoop() {
    let counter = 0;
    while(true) {
        yield counter++;
    }
}

const countWithLoop = counterWithLoop();
console.log("Counter with Loop");
console.log(countWithLoop.next().value);
console.log(countWithLoop.next().value);
console.log(countWithLoop.next().value);

// You can also pass arguments to a generator
function* counterWIthReset() {
    let counter = 0;

    while(true) {
        const result = yield counter++;
        const reset = result?.reset;
        if (reset === true) {
            counter = -1;
        }
    }
}
const countWithReset = counterWIthReset();

console.log("Counter with reset");
console.log(countWithReset.next().value);
console.log(countWithReset.next().value);
console.log(countWithReset.next().value);
console.log(countWithReset.next().value);
console.log(countWithReset.next().value);
console.log("Reseting");
countWithReset.next({reset: true});
console.log(countWithReset.next().value);
console.log(countWithReset.next().value);
console.log(countWithReset.next().value);
console.log(countWithReset.next().value);
console.log(countWithReset.next().value);