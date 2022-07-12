#!/usr/bin/env node

/*
    Null operator is used to decide between a two values

    When some of the values is null the other will be assigneds
*/

const hello = null;

// When we use ?? JS will ask to the variable if it is null
// if the variable is not null, js will assign the value of the first element
// if don't, js will assign the valua next to it
const greetings = hello ?? 'This is a default text';

console.log(greetings);