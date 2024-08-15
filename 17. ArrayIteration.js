// forEach
const nums = [45, 4, 9, 16, 23];
function FforEach(value, index, array){
    console.log('Outputs for forEach :\n')
    console.log(value);
    console.log(index);
    console.log(array);
    console.log('----------');
}
nums.forEach(FforEach);

//map()
/* map() method does not change the original array. */
const numbers2 = nums.map(fMap);
console.log('Map:',numbers2);

function fMap(value, index, array) {
  return value * 2;
}

//filter()
/* creates a new array with array elements that pass a test. */
function fFilter(value){
    return value > 18;
}
const over18 = nums.filter(fFilter)
console.log('Filter : ', over18);
/* If we use the fFilter for map(), it will return true/false value. Filter() returns array element */

//Reduce
/* - It runs a function on each array element to produce (reduce it to) a single value 
   - It does not reduce the original array.
   - Left-right
*/
function fReduce(total, value){
    return total + value;
}

let total = nums.reduce(fReduce, 0); //reduce() method can accept an initial value
console.log('Reduce : ', total);
/* If we want to work with right to left, then we can use reduceRight */

//every and some
/* every() method checks if all array values pass a test and return a single value
   some() method check if some values pass a test 
*/
console.log('Every : ',nums.every(fFilter)); // As all values are not greater than 18, it returns false
console.log('Some : ',nums.some(fFilter)); // True as some values greater than 18

// from
/*  useful for converting iterable objects (such as string, Map, Set, NodeList, etc.) into arrays */
const from = Array.from('ABCDE');
console.log('From : ',from);

// Entries
/* used with arrays to return an iterable object that contains key-value pairs for each index in the array.*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let f = fruits.entries()
console.log('Entries : ');
for(let x of f){
    console.log(x);
}


