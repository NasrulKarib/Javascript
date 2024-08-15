/* ~ A regular expression is a sequence of characters that forms a search pattern.
   ~ used to perform all types of text search and text replace operations.
   ~  /pattern/modifiers;
*/

let text = "Learning Javascript!";
console.log('Search index ',text.search('Javascript'));
console.log('Search index ',text.search(/javascript/i)); //  case-insensitive matching

let result = text.replace(/javascript/i, 'Python');
console.log('After Replace ', result);

text = "Learning Javascript and Javascript is best!";
result = text.replace(/Javascript/g, 'Python');
console.log('After Replace using g :', result);

text = 'Is this all there is ?';
result = text.match(/[h]/g);
console.log('After match using [h] :', result);

text = "123456789";
result = text.match(/[1-4]/g);
console.log('After match using [1-4] :', result);