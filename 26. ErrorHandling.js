/*
    ~ try statement defines a code block to run (to try).

    ~ catch statement defines a code block to handle any error.

    ~ finally statement defines a code block to run regardless of the result.

    ~ throw statement defines a custom error.
*/

// Try Catch
/* Structure
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
*/
try {
    adddlert("Welcome guest!");
  }
catch(err) {
    document.getElementById("demo").innerHTML = err.message;
}
/* JavaScript catches adddlert as an error, and executes the catch code to handle it. */

// throw
/* 
    ~ The throw statement allows to create a custom error.
    ~ The exception can be a JavaScript String, a Number, a Boolean or an Object
*/
throw "Too big";    // throw a text
throw 500;          // throw a number

try {
    if(x.trim() == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }

// Error object
/*
    ~ name	Sets or returns an error name
    ~ message	Sets or returns an error message (a string)
*/

// RangeError - is thrown to use a number that is outside the range of legal values.
let num = 1;
try {
  num.toPrecision(500);   // A number cannot have 500 significant digits
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}

// ReferenceError is thrown if a variable is used that has not been declared
let x = 5;
try {
  x = y + 1;   // y cannot be used (referenced)
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}

//SyntaxError is thrown if you try to evaluate code with a syntax error.
try {
    eval("alert('Hello)");   // Missing ' will produce an error
  }
catch(err) {
    document.getElementById("demo").innerHTML = err.name;
}

// A TypeError is thrown if an operand or argument is incompatible with the type expected by an operator or function.
let nums = 1;
try {
  nums.toUpperCase();   // You cannot convert a number to upper case
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}

// A URIError is thrown if you use illegal characters in a URI function
try {
    decodeURI("%%%");   // You cannot URI decode percent signs
  }
catch(err) {
    document.getElementById("demo").innerHTML = err.name;
}