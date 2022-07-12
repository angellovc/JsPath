#!/usr/bin/env node
/*
    ForEach

    This is a statement used to go over an array
*/

const animals = ["cat", "rat", "dog", "pig", "cow"];

// forEach receive a function and will apply that function every time
// it goes over an element in the list
animals.forEach(animal => console.log(animal))

// forEach passes arguments to the function it receives
// First argument: the array element
// Second argument: element index in the array 
animals.forEach((animal, index) => console.log(animal, index));
