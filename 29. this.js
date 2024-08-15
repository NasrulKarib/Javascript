// When used in an object method, this refers to the object.
/*
  In an object method, this refers to the object.
  Alone, this refers to the global object.
  In a function, this refers to the global object.
  In a function, in strict mode, this is undefined.
  In an event, this refers to the element that received the event.
*/
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
console.log('this in obj :',person.fullName());

//When used alone, 'this' refers to the global object.
/* In a browser window the global object is [object Window] */
let x = this;
console.log('this alone :',x);

// In a function, the global object is the default binding for this

// In HTML event handlers, this refers to the HTML element that received the event
/*
  <button onclick="this.style.display='none'">
        Click to Remove Me!
  </button>
*/

// Explicit Function Binding
/* 
  The call() and apply() methods are predefined JavaScript methods.
  They can both be used to call an object method with another object as argument.
*/
const person3 = {
  location : function(city, country){
    return city + ' ' + country;
  }
}
const person1 = {
    fullName : function(){
        return this.firstName + ' ' + this.lastName;
    }
}
const person2 = {
    firstName : 'Nasrul',
    lastName : 'Karib'
}

console.log('Person1 full name: ', person1.fullName.call(person2));
console.log('Person3 location: ', person3.location.apply(person2,['Dhaka', 'Bangladesh']));

// Function Borrowing
/*
    With the bind() method, an object can borrow a method from another object.
    The call() method takes arguments separately while apply() method takes arguments as an array.
*/


