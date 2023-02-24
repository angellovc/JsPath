/*
    Weakmap as its name points is a weak reference to objects.

    Normally if we were to have a reference to an object it won't
    be collected by the garbage collector unless that reference is
    lost.
    
    In this case, we can still have a reference to an object, but
    that reference won't interfer with the garbarge collertor. In
    other words, this reference allows the garbage collector to do
    its job whether the reference exists or not.
*/

const weakMap = new WeakMap();

let obj = {a: 1};

weakMap.set(obj, 123);

console.log(weakMap.get(obj));

obj = {b:2};

// Since the reference to the previews object was removed
// there's no reason for the garbage collector to keep the
// object, so it will be collected.
console.log(weakMap.get(obj));