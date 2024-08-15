/* JavaScript has only one type of number:*/
let x = 3.14;    
let y = 3;   
console.log(x);
console.log(y);
/* - JavaScript Numbers are Always 64-bit Floating Point.
   - always stored as double precision floating point numbers */

// The maximum number of decimals is 17.
x = 999999999999999;   // x will be 999999999999999
y = 9999999999999999;  // y will be 10000000000000000

x = "10";
y = "20";
console.log('String + String : ', x + y);

x = 10;
console.log('Num + String : ', x + y);

x = '10';
y = 20;
console.log('String + Num : ', x + y);

x = 10;
let z = 'The result is : ' + x + y;
console.log(z); // the x+y is not 30, rather it is 1020 as js checks from left to right 

x = 10 , y = 20;
z = '30';
let result = x + y + z;
console.log('x + y + z : ',result); // Ans is 3030

//JavaScript will try to convert strings to numbers in all numeric operations
x = 100, y = '100';
z = x/y;
console.log('x/y : ', z);
x = '100', y = 100;
console.log('x/y : ', z);
x = '100', y = '100';
console.log('x/y : ', z);
z = x*y;
console.log('x*y : ', z);
z = x-y;
console.log('x-y : ', z);
z = x+y; // This will not work;
console.log('x+y : ', z);

// NaN - Not a number
x = 'Apple', y =100;
z = x/y;
console.log('x/y : ', z); // if anyone of x or y is not number, ans will be NaN
console.log('NaN type:',typeof NaN); //NaN is a number



