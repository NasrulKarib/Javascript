// All the expression given below return true

(10 > 9)
10 > 9

/* Everything With a "Value" is True */
/* Everything With out a "Value" is False */
let a = 0; // 0 is false
let b = ''; // empty string is false
let c ; // undefined is false
let d = null; // null is false
let e = false; // false
let f = 10 / "Hallo";; // NaN is false

let x = false;
let y = new Boolean(false);
console.log('x == y is ', x==y); //using the == operator, x and y are equal
console.log('x === y is ', x===y); //using the === operator, x and y are not equal

/*Comparing two JavaScript objects always return false. */
x = new Boolean(true);
y = new Boolean(true);
console.log('x == y is ', x==y); 
console.log('x === y is ', x===y);