// All JavaScript objects inherit properties and methods from a prototype.

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
} // Constructor Function
  
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

// We can't add a new property like Person.nationality = "English" to Person
/*
  All JavaScript objects inherit properties and methods from a prototype.
  The Object.prototype is on the top of the prototype inheritance chain.
  Date obj fron Date.prototype, Array from Array.prototype.
*/

// To add property using prototype
Person.prototype.nationality = 'English';

Person.prototype.name = function(){
    return this.firstName + ' ' + this.lastName;
}

console.log(`Nationality : ${myFather.nationality} & Full Name : ${myFather.name()}`);