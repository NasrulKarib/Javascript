/* The const keyword was introduced in ES6 (2015) */

/* Reassigned */

const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error
// So, a variable defined with the const keyword cannot be reassigned

const PI1;
PI1 = 3.14159265359; // Incorrect, must be initialized first

/* When to use const 
    1. Objects and Arrays
    2. Function
    3. RegEx
const does not define a constant value. It defines a constant reference to a value.
*/

// Constant Arrays
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota"; // We can change an element but can not reassign
cars = ["Toyota", "Volvo", "BMW"]; // It can't be done

// Constant Objects
const car = {type:"Fiat", model:"500", color:"white"};
car.color = "red"; // Same properties as array
car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR

/* Redeclaring */
const x = 10; // Here x is 10
{
    const x = 2;// Here x is 2
}

var y = 2;     // Allowed
const y = 2;   // Not allowed

{
    let z = 2;     // Allowed
    const z = 2;   // Not allowed
}

{
    const o = 2;   // Allowed
    const o = 2;   // Not allowed
}

/* Hoisting */
alert (carName);
const carName = "Volvo"; //Using a const variable before it is declared will result in a ReferenceError

/* In summery,
    const 
    : have block scope 
    : can not be redeclared
    : can not be reassigned
    : must be declared before use
    : does not bind to this
    : are not hoisted 
*/