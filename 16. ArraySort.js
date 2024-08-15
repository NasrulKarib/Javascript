// Sorting array of string
/* sort() method sorts an array alphabetically */
/* Sort method change the main array */
let count = 0;
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(`${++count} : `,fruits);

// Reversing array of string
/* We can combine sort() and reverse() to sort and array in descending order*/
fruits.reverse();
console.log(`${++count} : `,fruits); // descending

// Numeric Sort
/* The sort() function sorts values as strings by default.
   We can sort number by providing a compare function */

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b}); // Ascending
console.log(`${++count} : `,points);

points.sort(function(a, b){return b - a}); // Descending
console.log(`${++count} : `,points);

/*
    function(a, b){return a - b}:
        - If the result is negative, a is sorted before b.
        - If the result is positive, b is sorted before a.
        - If the result is 0, no changes are done with the sort order of the two values.
 */

// Min & Max value
console.log(`${++count}. Max value : `, Math.max.apply(null, points));
console.log(`${++count}. Min value : `, Math.min.apply(null, points));

// Sorting object
const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];
/* Based on year is quite easy, but use the compare function */
cars.sort(function(a, b){return a.year - b.year});
console.log(`${++count}. Sort based on year : `,cars);
/* Comparing string properties is a little more complex */
cars.sort(function(a, b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
console.log(`${++count}. Sort based on type : `,cars);
