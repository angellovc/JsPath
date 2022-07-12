#!/usr/bin/env node

/*
    Sort mutable

    This is  mutable function is used to sort one specific array
    according to certain order
*/

const letters = ['a','f', 'c', 'b'];
letters.sort((a,b) => a.localeCompare(b));
console.log(letters);


const students = [
    {
        name: "Anyone",
        number: 3
    },
    {
        name: "Anything",
        number: 1
    },
    {
        name: "Someone",
        number: 2
    },
]

students.sort((a, b) => a.number - b.number);
console.log(students);