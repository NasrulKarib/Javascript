// toString()
/* The toString() method returns a number as a string. */
let x = 123;
console.log(x.toString());
console.log(typeof x.toString());

// toExponential() 
/* toExponential() returns a string, with a number rounded and written using exponential notation */
x = 1.125;
console.log(x.toExponential(2));

// toPrecision()
/*toPrecision() returns a string, with a number written with a specified length*/
x = 9.656;
console.log('Precision with none: ', x.toPrecision());
console.log('Precision with 1: ', x.toPrecision(1));
console.log('Precision with 2: ', x.toPrecision(2));
console.log('Precision with 4: ', x.toPrecision(4));
console.log('Precision with 6: ', x.toPrecision(6));

console.log('Max Value : ',Number.MAX_VALUE);
console.log('Min Value : ',Number.MIN_VALUE);
console.log('Positive Inf : ',Number.POSITIVE_INFINITY);
console.log('NaN : ',Number.NaN);
