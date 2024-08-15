// random number pick up from 1 to 6 in ludo 
function getRandomNum(mn, mx){
    return Math.floor(Math.random() * (mx - mn + 1)) + mn;
}
console.log('Random Number : ', getRandomNum(1,6));

// Reorder student of a class according to their roll number
const roll = [1,3,6,89,4,115,112,102,99,88,116,67,113];
roll.sort(function(a,b){
    return a-b;
});
console.log('Reordered Roll list: ',roll);

// Identify a year as a leap year or not
function isLeapYear(year){
    return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0));
}
if(isLeapYear(2025)) console.log('Leap year');
else console.log('Not Leap year');

// Check num of vowel from a string
const vowel = ['a','e','i','o','u','A','E','I','O','U'];

function checkVowel(s){
    const a = Array.from(s);
    let count = 0;
    a.forEach(function(value){
        if(vowel.includes(value)) count++;
    });
    return count;
    //onsole.log(a);
}
const test = 'I am from Dhaka';
console.log('Number of vowel is ',checkVowel(test));

// Check duplicate numbers in an array
const arr = [1,4,5,5,6,1,8,10,4,9];

const duplicate = arr.filter(function(value, index, array){
    return arr.indexOf(value) !== index;
});
console.log('Duplicate values : ', duplicate);

// Check unique numbers
const unique = arr.filter(function(value, index, array){
    return duplicate.includes(value) === false;
});
console.log('Unique values : ', unique);
