// String Length 
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;

// charAt()
let text1 = "HELLO WORLD";
let char = text1.charAt(5); //returns the character at a specified index (position) in a string
console.log(char);

// charCodeAt()
let text2 = "HELLO WORLD";
let char2 = text2.charCodeAt(0); //returns the code of the character at a specified index in a string
console.log(char2);

// at()
// It allows the use of negative indexes while charAt() do not.
const name = "W3Schools";
let letter = name.at(-1); //supported in all modern browsers since March 2022
let letter2 = name[1];
console.log(letter);
console.log(letter2);

/* If no character is found, [ ] returns undefined, while charAt() returns an empty string. */
console.log(text.charAt(28)); 
console.log(text[28]);

text[1] = 'A';
console.log(text);  // Gives no error, but does not work

// Slicing
/* It extracts a part of a string and returns the extracted part in a new string. */

let text3 = "Apple, Banana, Kiwi";
let part = text3.slice(7, 13); //start position, and end position (end not included).
console.log('slice(7, 13): ',part);

part = text3.slice(7); // slice out the rest of the string
console.log('slice(7): ',part);

part = text3.slice(-4); // counted from the end of the string
console.log('slice(-4): ',part);

part = text3.slice(-12, -6); // counted from the end of the string
console.log('slice(-12, -6): ',part);

// substring()
/* substring() is similar to slice().
The difference is that start and end values less than 0 are treated as 0 in substring(). */

part = text3.substring(7, 13);
console.log('substring(7, 13): ',part);

// substr()
part =  text3.substr(7,6); // second parameter specifies the length of the extracted part
console.log('substr(7, 6): ',part);

// Upper and Lower Case
text = 'Hello World!'
part = text.toUpperCase();
console.log('UpperCase: ',part);
part = text.toLowerCase();
console.log('LowerCase: ',part);

// Concat 
part  = 'Hello' + " " + 'World!'
console.log('Concat1: ',part);
part = text.concat(" ,", text1);
console.log('Concat2: ',part);
/* !!! IMPORTANT !!!
Strings are immutable: Strings cannot be changed, only replaced.*/

// trim()
text = "      Hello World!      ";
console.log(text.trim()); //removes whitespace from both sides of a string
console.log(text.trimStart()); //removes whitespace only from the start of a string.

// Padding
text = '5';
padded = text.padStart(4, 'x'); //pads a string from the start.
console.log(padded);

/* To pad a number, convert the number to a string first.*/
let num = 5;
text = num.toString();
padded = text.padStart(4, '0');
console.log(padded);

// Repeat
console.log(text1.repeat(2));
/* Repeat doesn't change the original tring. Rather  returns a string with a number of copies of a string. */

// Replace
text = "Please visit Microsoft and learn from Microsoft!";
replace = text.replace('Microsoft','Google'); //  method replaces only the first match
console.log(replace);
