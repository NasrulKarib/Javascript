// Back-Tics Syntax
/* Template Strings use back-ticks (``) rather than the quotes ("") to define a string */
let text = `Hello World!`;
console.log('Back-Tics Syntax : ', text);
text = `He's often called "Johnny"`
console.log('Quote inside String : ', text);

/* Template Strings allow multiline strings */
text =
`The quick
brown fox
jumps over
the lazy dog`;
console.log('multiline strings : ', text);

/* Template String provide an easy way to interpolate variables and expressions into strings.
 The method is called string interpolation. */
let country = 'Bangladesh';
text = `I love my ${country} more than any other country in the world`;
console.log('Inerpolation : ', text);

let firstName = "John";
let lastName = "Doe";

text = `Welcome ${firstName}, ${lastName}!`;
console.log('Variable Substitutions : ', text);

let price = 10;
let VAT = 0.25;

total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log('Expression Substitutions : ', total);
