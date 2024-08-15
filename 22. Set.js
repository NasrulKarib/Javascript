/* A JavaScript Set is a collection of unique values. */
const letters = new Set(["a","b","c"]);

console.log('Set of letter: ', letters);

// Creating new set
const num =  new Set();
num.add(1);
num.add(2);
num.add(3);
num.add(3);
console.log('Set of num:',num);

// value() -returns a new iterator object containing all the values in a Set
let text = "";
for (let x of letters.values()) {
  text += x;
}
console.log('text : ',text);
