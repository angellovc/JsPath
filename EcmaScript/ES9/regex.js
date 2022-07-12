#!/usr/bin/env node

/*
    Regular expressions are easier to be used rigth now

    There is a native way to use regex in JS without importing libraries
*/

const date = '2022-03-09';

// This way we create a regular expression to work with
const regex = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;

// Now we are able to apply that regular expression to any other string
// This way, the regular expression will be used to parse the string 
// and will return a new variable with all the matches
const match = regex.exec(date);
console.log(match);

console.log(match[0]);
console.log(match[1]);
console.log(match[2]);
console.log(match[3]);


// it is also possible to get and object with the string matches
// by using ?<nameOfVariable> in each expected match, but it only
// applies for browser it's not a feature supported by nodeJS
const regexData = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/
constmatch = regexData.exec('2018-04-20');
const { year, month, day } = match.groups;

console.log(year, month, day);