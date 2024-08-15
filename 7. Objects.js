// In JavaScript, almost "everything" is an object.
const car = {
    name: 'BMW', // Properties
    model: 500,
    weight: '850kg',
    color: 'white',
    cars: {
      car1:"Ford",
      car2:"Mercedes",
      car3:"Fiat"
    }
}

/* Accessing Object properties  */
console.log('All Properties : ',  Object.values(car)); // Any JavaScript object can be converted to an array using Object.values()
console.log('Color of car: ',car.color);// Property
console.log('Model of car: ',car['model']);
console.log('Nested Output 1: ',car.cars.car1); // Nested properties
console.log('Nested Output 2: ',car['cars']['car3']); 

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    age      : 34,
    fullName : function() {
      return this.firstName + " " + this.lastName; //this refers to the person object
      /* The this keyword refers to an object. */
      /* fullname is property here but fullname() is method */
    }
  };
console.log('Person fullname: ', person.fullName());

// JavaScript Objects are Mutable
/* Objects are mutable: They are addressed by reference, not by value. */

const man = person;
person.firstName = 'Nasrul';
person.lastName = 'Karib';
console.log('Man"s Name : ',man.firstName + ' ' + man.lastName); // As long as person is modified, man is also changed

delete person.age; // The delete operator is designed to be used on object properties.
