#!/usr/bin/env node

/*
    Propagation Properties
*/

const school = {
    schoolName: "ABC School"
}

const aprovedCourses = {
    history: "aproved",
    math: "aproved",
    science: "aproved",
}

const person =  {
    name: "John",
    age: 17
}

// In this new version its possible to build a new object 
// with any other objects by using the spread operatior

const student = {
    ...person,
    ...school,
    ...aprovedCourses,
    role: "student"
}

console.log(student);
