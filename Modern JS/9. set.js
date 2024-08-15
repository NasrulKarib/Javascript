const set = new Set();
set.add(1);
set.add(2);
set.add(1);
console.log('Set : ', set);

let myArray = [1,2,2,4,3,5,6,5,6];

let ArrayUnique = [...new Set(myArray)]; // only iterable obj can be put inside the set
console.log(ArrayUnique);

// Set Union
let a = [1,2,3];
let b = [4,5,2];
let union = new Set([...a, ...b]);
console.log('Set Union : ',union);

// Set intersection

let intersection = new Set([...a].filter(x => b.includes(x)));
console.log('Intersection : ', intersection);

// Set difference
// a - b
let difference = new Set([...a].filter(x => !b.includes(x)));
console.log('Difference : ', difference);