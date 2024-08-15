/*
JavaScript has 8 Datatypes
    1. String
    2. Number
    3. Bigint
    4. Boolean
    5. Undefined
    6. Null
    7. Symbol
    8. Object
*/

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

/* Types are Dynamic */
let a;       // Now x is undefined
a = 5;       // Now x is a Number
a = "John";  // Now x is a String

/* Javascript numbers are always one type: double (64-bit floating point). */

let car;
console.log(typeof car); // Undefined

let b = "";
console.log(typeof b); // empty string