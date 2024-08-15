// Array Length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log('1. Length of Fruits:',fruits.length);

// at()
console.log('2. Element at index 2:',fruits.at(2));
console.log('3. Element at last index:',fruits.at(-1));

// join()
console.log('4. After join:',fruits.join(' * '));

// Popping and Pushing
console.log(`5. Popping item is ${fruits.pop()} and final array is`,fruits); //pop() method returns the value that was "popped out"
console.log(`6. Final array is`,fruits,` and Array lenght is ${fruits.push('Guava')}`); //push() method returns the new array length

// Shift and unshift
/*
    ~ shift() method removes the first array element and "shifts" all other elements to a lower index.
    ~ unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements.
*/
/* Shift is like pop-front and Unshift is like Push-back */
console.log('7. Shifted element is ',fruits.shift()); //shift() method returns the value that was "shifted out"
console.log('8. Array after shifting',fruits);
fruits.unshift('Cherry');
console.log('9. Array after unshifting',fruits);

// Array Concat
const myGirls = ["Sumaiya", "Mehrima"];
const myBoys = ["Saad", "Osman", "Yusuf"];
const myWives = ['Rokeya','Hasina','Ayesha','Juthi'];

const myFamily = myGirls.concat(myBoys, myWives, 'Arian');
console.log('10. myFamily : ', myFamily);

// Splice and slice
/* The splice() method can be used to add new items to an array */

//fruits = [ 'Orange', 'Apple', 'Guava' ]; 
fruits.splice(1, 0, "Lemon", "Kiwi") // Start from index 1 and remove 0 elements from there
console.log('11.',fruits);

fruits.splice(0, 1); // Remove 1 element from index 0
console.log('12.',fruits);

const citrus = fruits.slice(1, 3); //starts from index 1, then include 2 but not 3
console.log('13.', citrus);

//indexOf - returns index of first appearance of element
let position = fruits.indexOf("Apple") + 1;
console.log('14.',position);
fruits.push('Apple');
position = fruits.lastIndexOf("Apple") + 1;
console.log('15.',position);

// Include
console.log('16.',  fruits.includes('Kiwi')); //check if an element is present
