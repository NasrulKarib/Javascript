// typeof is an operator
/*
    Javascript have 5 different data type:
        1. String //Primitive data - no additional properties and method
        2. Number // Primitive data
        3. Boolean //Primitive data
        4. Object // Complex data
        5. Function // Complex data

    Obj has 6 types:
        1. Object
        2. Date
        3. Array
        4. String
        5. Number
        6. Boolean
    
    2 types that can't contain values:
        1. null - something that doesn't exist.
        2. undefined -  a variable without a value and have reference in memory
    # undefined and null are equal in value but different in type
    so, null == undefined is true but null === undefined is false
*/
typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" 
typeof null                   // Returns "object"
typeof typeof {name:'John', age:34}  // Return String