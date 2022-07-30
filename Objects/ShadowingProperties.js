/*
    Shadowing Prototype properties

    Shadowing a propetie is a phenomenon that takes place
    every time we use a property to hide the one comming
    from the prototype
*/

// As we know, obj does not have a toString() property
// it is inherited from the Object prototype
const obj = {};
console.log(obj.toString());

// Nevertheless we can override the toString object property
// by adding a property with the same name to obj
// Since JS will search for properties inside the object before
// going to its prototype it will find the new toString method
// inside obj before going to its prototype
// so this way we got to hide the property predefined method
// We shadowed the prototype toString method 
obj.toString = () => 'This property is hiding the prototype one'
console.log(obj.toString());
