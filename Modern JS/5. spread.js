// The spread operator is used to expand elements of an array or properties of an object into individual elements. 
// Copying Array
let nums = [1, 2, 3];
let a = [...nums, 10, 11];
nums.push(5);

console.log('nums: ',nums);
console.log(' a : ',a); // changing of nums doesn't have any effect on a

// Combining Arrays

const array1 = [1,2,3];
const array2 = [4,5,6];
const combined = [...array1, ...array2];
console.log('Combined: ',combined);

// Function arg
function add(a, b, c) {
    return a + b + c;
  }
  
const numbers = [1, 2, 3];
console.log(add(...numbers)); // Output: 6

// Copying objects
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };

console.log(copiedObject); // Output: { a: 1, b: 2 }
console.log(copiedObject === originalObject); // Output: false

// Merging obj
const xtra = {c:3, d:4};
const merged = {...originalObject,...xtra};
console.log('Merged : ', merged);
  