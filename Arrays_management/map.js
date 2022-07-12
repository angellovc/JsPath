#!/usr/bin/env node

/*
    Map -> Inmutable

    This function receive a another function and 
    will iterate over an array, once it have
    finished it returns a new one according to 
    the logic of the function passed
*/

const courses = [
    {
        name: "History",
        note: 10,
        approved: false,
    },
    {
        name: "Science",
        note: 10,
        approved: false,
    },
    {
        name: "Math",
        note: 10,
        approved: false,
    },
    {
        name: "Language",
        note: 10,
        approved: false,
    },
]

const courseNames = courses.map(course => course.name);
console.log(courseNames);

/*
    In case we want to modify any of the elements inside an array of objects
    and return a new array without modify the first, it is necessary to use
    the spread operator to secure the object is copied entirely and not only
    its reference.

    It is inmutable, because it make a copy of the elements information
    from one array into another, but in the objects case, the only thing
    that will be copied is the memory address in which those are causing
    the change of the first array
*/
const passedCourses = courses.map(course => ({...course, approved: true}));
console.log("First course from Modified array: ", passedCourses);
console.log("First course from original array: ", courses);

// This is a bad practice
const passeCoursesAlteringOriginal = courses.map(course => {
    course.approved = true;
    return course;
});
console.log("First course from Modified array with bad practices: ", passedCourses);
console.log("First course from original array after bad practices: ", courses);
