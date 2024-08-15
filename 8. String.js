let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes

/* Quotes Inside Quotes */
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

/* String Length */
let text = "ABCDEFGHIJ KLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);

/*JavaScript Strings as Objects */
let x = "John";
let y = new String("John"); //The new keyword complicates the code and slows down execution speed.
console.log('x == y:' , x==y); // Just compare value
console.log('x == y:', x===y); // compare both value and type

// But comparing two JavaScript objects always returns false.
let z = new String("John");
let u = new String("John");
console.log('z == u:',z == u); 
console.log('z == u:',z === u); 