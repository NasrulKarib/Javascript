// Array
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = 'Toyota';
console.log(cars);
console.log('Array is an',typeof cars); //Arrays are a special type of objects.
/* As array is a special type of obj, we can use variosu method in array */

/* We can have:
    - objects in Array
    - Functions in Array
    - Arrays in Array
*/
const person = ['Aru','Goru','Haru'];
const student = {
    Name : 'Shibly',
    Subj : 'CSE',
    Varsity : 'Brac',
}
cars[1] = student;
cars[2] = person;
console.log('Array of string, obj and array: ',cars);
console.log('Lenght of array: ',cars.length);
console.log('Lenght of object: ',student.length);

// Array.forEach() - method that allows you to iterate over the elements of an array. 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let count = 0;
fruits.forEach(function(fruits) {
    console.log(`Index ${count++}-`,fruits);
  });
  
// Adding element
fruits.push('Lemon');
console.log('Arrays with added element:',fruits);

// Associative Arrays or Hashes
/* Arrays with named indexes are called associative arrays */
/* JavaScript does not support arrays with named indexes. */

// Array vs Objects
/* Arrays use numbered indexes while objects use named indexes. */
/* Arrays are a special kind of objects, with numbered indexes.*/

// Common Error
const points = [40]; // Create an array with one element
const points2 = new Array(40); //Create an array with 40 undefined elements
console.log('Point2:',points2);

//How to Recognize an Array
/* typeof return object cz js array is an object */
console.log('Is fruits an Array?:',Array.isArray(fruits));

