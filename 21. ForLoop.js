/*
JavaScript supports different kinds of loops:

    ~for - loops through a block of code a number of times
    ~for/in - loops through the properties of an object
    ~for/of - loops through the values of an iterable object
    ~while - loops through a block of code while a specified condition is true
    ~do/while - also loops through a block of code while a specified condition is true
*/

// for loop
for (let i = 0; i < 5; i++) {
    console.log('i = ',i);
}
// for in
/*The JavaScript for in statement loops through the properties of an Object */
const person = {
    fname:"John",
    lname:"Doe", 
    age:25
};

for (let x in person) {
  console.log(`${x} = ${person[x]}`);
}

const numbers = [45, 4, 9, 16, 25];
for(let x in numbers){
    console.log(`index ${x} is ${numbers[x]}`);
}
/* 
    Do not use for in over an Array if the index order is important.
    It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.
*/

// for of
const cars = ["BMW", "Volvo", "Mini"];
console.log('Elements of cars: ')
for (let x of cars){
    console.log(x);
}

let x = 'Arian';
for(let i of x){
    console.log(i);
}
