/*A JavaScript function is defined with the function keyword,*/
function myFunction(name,age){
    console.log(name +"'s age is "+ age);
    // return undefined
}
myFunction('Arian',30);
// Parameter : inside the parentheses () in the function definition
// Arguments: values received by the function when it is invoked.
let x = myFunction('Nazrul', 60);
console.log(x); //Undefined cz doesn't return anything

x = myFunction;
console.log(x); // return the function as an object, not function result

// Function Expression
/*
    ~ A function expression can be stored in a variable
    ~ Functions stored in variables do not need function names. They are always invoked (called) using the variable name.
*/
x = function(fahrenheit) { return (5/9) * (fahrenheit-32)};
console.log('Function Expression : ', x(50));
// The func. above is called  anonymous function = a function without a name.
// Functions defined using an expression are not hoisted.

// Arrow Function
/*
    ~ Arrow functions do not have their own this. They denote object of this as global object f 
    ~ Arrow functions are not hoisted.
*/
x = (a,b) => { return a*b};
console.log('Arrow Function : ',x(4,5));

// Function Hoisting
/*
    ~ Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.
    Because of this, JavaScript functions can be called before they are declared
*/
console.log('Hoisting example : ', hoisting(5));
function hoisting(y) {
    return y * y;
}

/* Important points to remember:
    - Arguments are passed by Value but Objects are passed by Reference
    - If a function changes an argument's value, it does not change the parameter's original value.
    - If a function changes an object property, it changes the original value.
*/

// Self-invoking function
 (function(){
    let x = 'belo!';
})();
