#!/usr/bin/env node

/*
    Before in the past we used Promises to manage asynchronous
    operations. Now is it possible to manage async operations
    by using async function.
*/


/*
    Promises

    When we use promises the function will be transofrmed
    into an async function and will wait till the process
    inside is finished to return something.

    The result of this function is taken by the function
    then, when it's succesfull, and catch, when it fails,
*/
const helloWorld = () => {
    return new Promise((resolve, reject) => 
        true 
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    )
}

helloWorld().then(result => console.log(result)).catch(error => console.log(error));


const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay));

/*
    By using Async functions the asynchronous operations
    are more readables
*/

const helloAsyncWorld = async () => {
    if (true) {
        await wait(3000);
        console.log("Hello Async Wolrd");
    }
    new Error("Async test failed")
}

helloAsyncWorld();