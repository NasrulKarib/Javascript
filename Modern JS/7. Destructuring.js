const person = { 
    id : 12,
    name: 'Arian', 
    age: 25 ,
    education:{
        SSC: 'Ideal School and College' ,
        HSC: 'Notre Dame College',
        BSc: 'CUET',
    }
};
// Obj Destructuring
const {name} = person;
console.log('Name of person : ', name);
const {education:{HSC : degree}}= person;
console.log('Degree: ', degree);
const {education:{JSC} = {}} = person; //i sometimes, api contains missing values
console.log('JSC: ', JSC);

// Array Destructuring
var nums = [1,2,3,4,5,6];
var [first,,,fourth,,]= nums;
console.log(`First number : ${first} and Fourth number : ${fourth}`);
var num1 = [1,[2,3,4],5];
var [,[a,,b]] = num1;
console.log(`Nested a : ${a} and b : ${b}`);

// Swapping values
var a = 5, b = 6;
[b,a] = [a,b];
console.log(`Swapping values: ${a} , ${b}`);