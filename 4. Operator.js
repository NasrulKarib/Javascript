let x = 5 + 5;
x += 10;
let y = "5" + 5;
let z = "Hello" + 5;
console.log(x);
console.log(typeof y); // typeof is a type operator
console.log(z);
x **= 2;
console.log(x);

var m;
m ??= 10;//Nullish coalescing assignment operator: If the first value is undefined or null, the second value is assigned.
console.log(m);

// == vs ===
/* == compare value and converted the type
  === compare value without converting the type */
5 == '5'; // true, because '5' is converted to a number before comparison
0 == false; // true, because false is converted to 0 before comparison
null == undefined; // true

5 === '5'; // false, because the types (number vs. string) are different
0 === false; // false, because one is a number and the other is a boolean
null === undefined; // false, because they are of different types

