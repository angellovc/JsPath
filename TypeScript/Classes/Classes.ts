/*
    Classes
*/

/*
    Abstract classes are used for very Abstract
    classes that are used to avoid repeated code
    but we won't get object from them 
*/
abstract class Vehicle {
    id: number;
    brand: string;
    model: number;

    constructor(id: number, brand: string, model: number) {
        this.id = id;
        this.brand = brand;
        this.model = model
    } 
}

// Classes can inherit from other classes by using extend
// the parent class properties are initialized by colling
// the super function. It works for normal and abstract
// kind of classes
class MotorCycle extends Vehicle{
    engineType: string;

    constructor(id: number, brand: string, model: number, engineType: string) {
        super(id, brand, model);
        this.engineType = engineType;
    } 

}

// It's not possible to instanciate an abstract class
// const vehicle = new Vehicle(1, 'BMW', 2020);
// Nevertheless it's possible to instanciate the current classes
// which inherit from this
// const bike = new MotorCycle(1, "BMW", 2020, "4-times");
