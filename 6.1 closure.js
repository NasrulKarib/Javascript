/* 
   A closure is a function having access to the parent scope, even after the parent function has closed.
*/

// How it works

function outerFunction() {
    let outerVar = 'I am outer';

    return function innerFunction() {
        console.log(outerVar); // innerFunction can access outerVar
    }
}

let myClosure = outerFunction(); // When innerFunction is returned from outerFunction and stored in a variable
myClosure(); // the returned function maintains a reference to the outerVar variable of its parent scope (outerFunction's scope).

// myClosure is a reference for innerFunction and and it retains access to outerVar even though outerFunction has already finished executing.

// So closure allows the function to have access to variables from its parent scope even after the parent function has completed execution. 