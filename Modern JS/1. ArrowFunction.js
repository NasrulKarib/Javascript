// Arrow functions were introduced in ES6.
var hello = function(){ return 'hello'}; // before arrow
hello = () =>{ return 'hello world'}; // after arrow
hello = () => "hello world pro!"; // Arrow Functions Return Value by Default:

hello = (val) => 'Hello' + val ; // with parameter
hello = val => 'Hello' + val ; // with parameter

// With arrow functions the this keyword always represents the object that defined the arrow function.
// Arrow function doesn't have headache for this keyword. this inside arrow function is same as its parent this
// Arrow function doesn't have constructor propertyNf