#!/usr/bin/env node

// Some will return a true if one of the elements in an array
// accomplished with a specific condition

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
        approved: true,
    },
]

// It will return true if there is an approved course in the array
console.log(courses.some(course => course.approved === true));