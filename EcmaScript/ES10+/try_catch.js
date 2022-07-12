#!/usr/bin/env node

// now it is not necessary to define the error in the catch sentence
try {
    throw ("test failed");
} catch {
    console.log("It works although you don't define anything in catch statement");
}
