#!/usr/bin/env node

/*
    Filter -> inmutable

    It iterates over one array and return another one
    according to certain rules

    This function receives another function where the
    rules must be defined and that function should
    return true or false according to the rules 
*/

const courses = [
    {
        name: "History",
        note: 7,
        approved: true,
    },
    {
        name: "Science",
        note: 10,
        approved: true,
    },
    {
        name: "Math",
        note: 5,
        approved: false,
    },
    {
        name: "Language",
        note: 2,
        approved: false,
    },
]


const approvedCourses = courses.filter(course => course.approved === true);
console.log("Approved Courses", approvedCourses);
console.log("Original Courses", courses);

const approvedHighestNoteCourses = courses.filter(course => course.approved === true && course.note === 10);
console.log(approvedHighestNoteCourses);