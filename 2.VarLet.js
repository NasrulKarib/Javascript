/* Redeclarable */
let x = 'hello'; // let can not be redeclared 
var y = 4;
var y = 3; // var can be redeclared
console.log(y);

/* Scope */
if(true){
    let x = 'arian';// local variable
    console.log(x);// inside block, local
    console.log(y);// var can be accessible inside the block
}
console.log(x);// outside block, global

/* Problem of var */
{
    var y = 5;
    console.log(y); 
}
console.log(y);// inside and outside block produce same result.
/* Variables declared with var inside a { } block can be accessed from outside the block
This might create a problem
*/

/* Hoisting */
hoisted = 'Can be';
var hoisted;
console.log(hoisted); //We can use variable before it is declared.
// Variables defined with var are hoisted to the top and can be initialized at any time.
carName = "Saab";
let carName = "Volvo"; // Using a let variable before it is declared will result in a ReferenceError
// Variables defined with let are also hoisted to the top of the block, but not initialized.

/* In Summery,
 let 
    : have block scope 
    : can not be redeclared
    : must be declared before use
    : does not bind to this
    : are not hoisted
var
    : does not have to be declared
    : is hoisted
    : binds to this
*/
