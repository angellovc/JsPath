#!/usr/bin/env node

/*
    Flat and FlatMap

    conver neested arrays into an array: flat the arrays
*/


const animals = ["cat", "dog", ["lion", "elephant", ["bird", "cricket"]]];

// By default this function flats an array in one level
const flatAnimals0 = animals.flat();
const flatAnimals1 = animals.flat(1);
// But you can define the levels in which the array will be flatted
const flatAnimals2 = animals.flat(2);

console.log(flatAnimals0, flatAnimals1, flatAnimals2);


/*
    Sometimes you want to get a flatted version of
    the arrays inside objects. So you can map the
    objects to get a list of the list attributes
    inside the objects and then you can use flat
    to flat them or you can use flatMap
*/

const students = [
    {
        name: "Bobby",
        courses: ["History", "Science", "Language"],
    },
    {
        name: "Bobo",
        courses: ["Math", "Science", "Biology"],
    },
    {
        name: "Smarthy",
        courses: ["History", "Science", "Writting"],
    },
]

const studentCourses = students.map(student => student.courses);
// Then you get a two dimensional array
const flattedStudentCourses = studentCourses.flat();
console.log(flattedStudentCourses);

// shorter and cleaner
const coursesFromFlatMap = students.flatMap(student => student.courses);
console.log(coursesFromFlatMap);
