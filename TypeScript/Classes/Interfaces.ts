/*
    Interfaces

    We can pre-define the kind of properties we want an object to have
    It's necessary to use Interfaces in order to type objects or
    constrain classes
*/

enum Roles {
    student = "Student",
    teacher = "teacher",
    admin = "admin",
}

interface Person {
    id: number
    name: string,
    role: Roles,
    // By adding an interrogant at the end
    // the property will be treated as opcional
    sayHello?(): void
}

// In this case we are using the Interface to constrain
// an object
const studentObject: Person = {
    id: 1,
    name: 'Bob',
    role: Roles.admin,
}

// We we want to use an interface to constrain a clase
// we use implements 
class Student implements Person {
    private _id: number;
    private _name: string;
    private _role: Roles;

    public constructor(id: number, name: string, role: Roles) {
        this._id = id;
        this._name = name;
        this._role = role
    }

    public get id(): number {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public get role(): Roles {
        return this._role;
    }

    public sayHello(): void {
        console.log('Hello');
    }
}

/*
    Interfaces Inheritance
*/

interface Adult extends Person {
    socialID: number,
    teach(): void,
    // Althoug the interface is hering from Person
    // it's possible to override the expected properties
    role: Roles.teacher
}

interface Child extends Person {
    FatherName: string,
    MotherName: string
}

// The objects restricted with this new interfaces
// will have to implement the properties from Person
// and themselves
const teacher: Adult = {
    id: 1,
    name: 'Alex',
    role: Roles.teacher,
    socialID: 12341,
    teach: () => console.log('Teaching...'),
    sayHello: () => console.log('Hello'),
}