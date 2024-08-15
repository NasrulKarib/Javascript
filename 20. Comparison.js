let x = 5;
console.log('x == 8', x == 8);
console.log('x == 5', x == 5);
console.log('x == "5"', x == '5');
console.log('x === 5', x === 5);
console.log('x === "5"', x === "5");
console.log('x !== "5"', x !== "5");
console.log('x != "5"', x != "5");

x = "";
console.log('x == 0', x == 0); //An empty string converts to 0
x = 2;
console.log('x < "12" is ', x < "12"); // JavaScript will convert the string to a number when doing the comparison. 
console.log('"2" > "12" is ', '2'>'12'); // (alphabetically) 1 is less than 2.

//The Nullish Coalescing Operator (??)
/* The ?? operator returns the first argument if it is not nullish (null or undefined).
   Otherwise it returns the second argument.*/
let name = null;
let text = "missing";
console.log('name ?? text = ', name ?? text);