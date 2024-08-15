var x = 5;
var myObj = {
    name : 'Arian' ,
    dept : 'CSE' ,
    age : 20,
    x,
}

// We can easily iterate through myObj using following function
var keys = Object.keys(myObj)
var values = Object.values(myObj)
var entries = Object.entries(myObj) // Array of array
console.log(keys);
console.log(values);
console.log(entries);