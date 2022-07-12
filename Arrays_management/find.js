#!/usr/bin/env node
/*
    Find will return the first element that meets the condition
    FindIndex will return the index of that element, not the element itself
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
        approved: true,
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

const approvedCourse = courses.find(course => course.approved === true);
console.log(approvedCourse);

const approvedIndexCourse = courses.findIndex(course => course.approved === true);
console.log(approvedIndexCourse);
