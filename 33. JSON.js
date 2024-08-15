/*
 ~ JSON = JavaScript Object Notation
 ~ It is lightweight data interchange format and language independent.
 ~ JSON format is text only
 ~ JSON is language independent 
*/

/*
Array of obj
{
    "employees" : [
      {"firstName":"John", "lastName":"Doe"},
      {"firstName":"Anna", "lastName":"Smith"},
      {"firstName":"Peter", "lastName":"Jones"}
    ]
}
*/

//  JavaScript program can easily convert JSON data into native JavaScript objects.

/* JSON Syntax rules:
    ~ Data is in name/value pairs
    ~ Data is separated by commas
    ~ Curly braces hold objects
    ~ Square brackets hold arrays
*/

// A common use of JSON is to read data from a web server, and display the data in a web page.

// JSON.parse() - to parse a JSON string into a JS object (String -> obj)
// JSON.stringify() - convert a JS obj into JSON String (Obj -> String)

const jsonString = '{"name":"John Doe","age":30,"isStudent":false}';
const person = JSON.parse(jsonString);
console.log(person.name); // Output: John Doe

/*
  In JSON, values must be one of the following data types:
    - a string
    - a number
    - an obj
    - an array
    - a boolean
    - null
  But can't be :
    - a function
    - a date
    - undefined
  JSON as string: {"name":"John"}
  JSON as number: {"age":25}
  JSON as objective: { "employee":{"name":"John", "age":30, "city":"New York"}}
  JSON as arrays : { "employees":["John", "Anna", "Peter"] }

*/
const personObject = { name: 'Jane Smith', age: 25 };
const jsonObject = JSON.stringify(personObject);
console.log(jsonObject); // Output: {"name":"Jane Smith","age":25}
