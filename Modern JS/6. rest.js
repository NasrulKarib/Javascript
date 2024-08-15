// The rest operator is used to collect multiple elements into a single array or object. 
// It is used in function parameters and destructuring assignments to gather remaining items.

// function parameter
function restCheck(a, ...params){
    console.log(a);
    console.log(params);
}
restCheck(4,5,6,3,7);

// Array Destructuring
const[first, second, ...rest] = [10,20,30,40,50];
console.log('First: ',first);
console.log('Second: ',second);
console.log('Rest: ',rest);

const fullName = ['John', 'Doe', 'Smith'];
const [firstName, ...lastName] = fullName;

console.log('FirstName: ', firstName); // Output: "John"
console.log('Lastname: ',lastName);  // Output: ["Doe", "Smith"]

//object destructuring
const user = {
    id: 1,
    name: 'Alice',
    age: 25,
    country: 'USA'
};
  
const { id, ...details } = user;
  
console.log(id);      // Output: 1
console.log(details); // Output: { name: 'Alice', age: 25, country: 'USA' }
  
