/*
    Interfaces

    They're not built-in JS; nevertheless, there are some
    ways to emulate them
    - comments
    - attribute checking
    - duck typing
    The last two may affect the performance, since you're
    adding extra steps on the fly to validate
*/



/*
    Comments interface

    Comments are used to define the interface
    and to tell which class will implement it

    It's fast in technical terms and does not
    and comments are removed from prod build
    not affecting the size of the end program
*/

/*
    interface Vehicle {
        start() => void
        break() => void
        honk() => string
    }
*/
var Car = function() {/*Implements Vehicle*/};
Car.prototype.start = () => {};
Car.prototype.break = () => {};
Car.prototype.honk = () => "Honk! Honk!";


/*
    Attribute Checking

    Interface is commented and there's an object
    in the class that explicitly contains which
    interfaces are being implemented

    When a method need to receive a specific type
    of class it uses the class interface object to
    whether it implements the required interface or not
*/

/*
    interface Vehicle {
        start() => void
        break() => void
        honk() => string
    }
*/

var isImplemented = function() {
    for(var i = 0; i < arguments.length; i++) {
        var interface = arguments[i];
        for(var j = 0; j < this.implementedInterfaces.length; j++)
            if (this.implementedInterfaces[j] == interface)
                break;
            else
                return false;
    }
    return true;
}

var Car = function() {
    this.implementedInterfaces = ['vehicle'];
};
Car.prototype.start = () => {};
Car.prototype.break = () => {};
Car.prototype.honk = () => "Honk! Honk!";
Car.prototype.isImplemented = isImplemented;

var drive = function(car) {
    if (!car.isImplemented('vehicle'))
        throw new Error('vehicle object was not passed through')
    console.log('Driving!')

}
var car = new Car();
drive(car);


/*
    Ducky typing
        “If it walks like a duck and quacks like a duck, it’s a duck.”

    It uses a function to check whether the class
    implements the methods defined by the interface
    if that's the case, we can assume the class indeed
    is implementing the interface.

    Unlike the previous interface implementation, here
    the checking function is in charge of check for the
    class method names
*/

var isImplemented = function() {
    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i].length; j++)
            if (typeof this.__proto__[arguments[i][j]] !== 'function')
                return false;
    }
    return true;
}

var Vehicle /* interface */=  ['start', 'break', 'honk'] /* methods */
var Car = function() {/* implements Vehicle*/};
Car.prototype.start = () => {};
Car.prototype.break = () => {};
Car.prototype.honk = () => "Honk! Honk!";
Car.prototype.isImplemented = isImplemented;

var drive = function(car) {
    if (!car.isImplemented(Vehicle))
        throw new Error('vehicle object was not passed through')
    console.log('Driving!!')

}
var car = new Car();
drive(car);
