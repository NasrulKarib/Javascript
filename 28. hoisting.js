// Hoisting is JavaScript's default behavior of moving declarations to the top.
/* var is hoisted on the top and assigned as undefined */
x = 5; // Assign 5 to x
var x; // Declare x
// console.log(x);

/* let and const are hoisted to the top of the block, but not initialized. */
 carName = "Volvo";
 let carName; // ReferenceError
/* The variable is in a "temporal dead zone" from the start of the block until it is declared */

/*
    cars = 'Toyota';
    const cars; //syntax error
*/

//JavaScript only hoists declarations, not initializations.
var x = 5; // Initialize x
console.log(5, y); // 5 , undefined
var y = 9;

// To avoid bugs, always declare all variables at the beginning of every scope.

