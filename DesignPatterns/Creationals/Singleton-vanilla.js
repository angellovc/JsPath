/*
    Singleton

    Singleton pattern allow a set of properties and methods
    to be accessible across the app. Having a public  object
    may emulate that behavior
*/

/*
    Private methods by convention
*/

// Using name conventions is important. Since
// it helps other programmers not to override
// the singleton
globalStore = {
    // Private elements can be defined with underscore
    // indicating other programmers not to use them
    _items: {
        tomato: 2,
        milk: 20
    },
    buy: function(item){
        if (!_items[item])
            throw new Error(`Ẁe ran out of ${item}`);
        _items[item]--;
        console.log(`You bought ${item}`);
    },
    sell: function(item, role){
        if (role === 'distributor'){
            _items[item] = 1;
            console.log(`You sold ${item}`);
        }
        else
            throw new Error(`You're not allowed to sell items`)
    },
    listItems: function() {
        Object.keys(_items).forEach(console.log);
    }
}

// Our object is now attached to the global scope
// meaning it can be used across the program as
// it happens with a singleton
console.log(globalThis.globalStore)


/*
    Private methods by hiding them

    By wrapping the object into a closure we can 
    encapsulate some logic keeping it private and
    decide what we want to expose or not.

    Everything in the return will be public, nevertheless
    everything in the parent scope will be accessible only
    by the returned object.
*/

globalStore = (() => {
    // Private scope
    const items = {
        tomato: 1,
        milk: 20
    };
    // Public scope 
    return {
        buy: function(item){
            if (!items[item])
                throw new Error(`Ẁe ran out of ${item}`);
            items[item]--;
            if (items[item] === 0)
                delete items[item]
            console.log(`You bought ${item}`);
        },
        sell: function(item, role){
            if (role === 'distributor'){
                items[item] = 1;
                console.log(`You sold ${item}`);
            }
            else
                throw new Error(`You're not allowed to sell items`)
        },
        listItems: function() {
            console.log(Object.entries(items));
        }
    }
})()

// If we print our global object we'll se our methods, but now the 
// private attributes are hidden
console.log(globalThis.globalStore)
globalThis.globalStore.listItems();
globalThis.globalStore.buy('tomato');
globalThis.globalStore.listItems();
// If I try to access items I'll get undefined
console.log(globalThis.globalStore.items);


/*
    Lazy Instantiation

    Lazy instantiation means that the singleton object
    (instantiation) is only returned when it's decided

    It's useful when the singleton initialization have
    to perform heavy tasks and you don't want them to 
    run at the beginning of the program, but once the
    program requires them (they maybe never used).
*/

globalStore = (() => {

    let instance = null;

    const constructor = () => {
        // Private scope
        const items = {
            tomato: 1,
            milk: 20
        };
        // Public scope 
        return {
            buy: function(item){
                if (!items[item])
                    throw new Error(`Ẁe ran out of ${item}`);
                items[item]--;
                if (items[item] === 0)
                    delete items[item]
                console.log(`You bought ${item}`);
            },
            sell: function(item, role){
                if (role === 'distributor'){
                    items[item] = 1;
                    console.log(`You sold ${item}`);
                }
                else
                    throw new Error(`You're not allowed to sell items`)
            },
            listItems: function() {
                console.log(Object.entries(items));
            }
        }
    }

    return {
        getInstance: () => {
            if (instance !== null)
                return instance;
            instance = constructor();
            return instance;
        }
    }

})();

console.log(globalThis.globalStore)
// Now we would call our singleton method through getInstance
// as if we were in a OOP language
globalThis.globalStore.getInstance().listItems();
globalThis.globalStore.getInstance().buy('tomato');
globalThis.globalStore.getInstance().listItems();
console.log(globalThis.globalStore.getInstance().items);