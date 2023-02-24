/*
    Promises


*/


const p1 = new Promise((resolve, reject) => {
    resolve('Done');
})

p1.then(console.log)


const promise = (done) => {
    return new Promise((resolve, reject) => {
        if (done)
            resolve('completed');
        else
            reject('failed');
})}

/* Promise fulfilled */
promise(true).then(console.log);
/* Promise rejected */
promise(false).catch(console.log);

promise(false).then(undefined, console.log);


promise(true)
    .then(data => data)
    .then(data => data)
    .then(data => data)
    .then(console.log)
    .finally(data => console.log('finally expression'));

console.log('Immediate');