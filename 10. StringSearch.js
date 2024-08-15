// String IndexOf
/* The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found */
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
console.log('index of locate : ',index);
index = text.indexOf("not");
console.log('index of not : ',index);

//lastIndexOf
text = "Please locate where 'locate' occurs!";
index = text.lastIndexOf('locate');
console.log('lastIndex of locate : ',index);
index = text.lastIndexOf('locate',15);
console.log('lastIndex of locate from 15 index : ',index);

// Search
console.log('Index from search : ',text.search('locate'));

/* search() vs indexOf()
    - The search() method cannot take a second start position argument.
    - The indexOf() method cannot take powerful search values (regular expressions).
*/
