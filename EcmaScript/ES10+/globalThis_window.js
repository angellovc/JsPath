#!/usr/bin/env node

/*
    JS for browsers is slightly different from JS for servers

    One of the differences is here: window vs globalThis
*/

// When you are working with nodeJS you use globalThis to access
// to the global object
console.log(globalThis);

// When you are working with browsers, mostly in front-end, you use window object
// to acess the global one
console.log(window);