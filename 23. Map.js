/*
    A Map holds key-value pairs where the keys can be any datatype.

    A Map remembers the original insertion order of the keys. */

const fruits = new Map([
    ['apple', 400],
    ['bananas', 200],
    [33,2323]
]);

// add and change element to a Map
fruits.set('guavas', 233);
console.log('Fruits:', fruits);
fruits.set('apple', 233);
console.log('Updated Fruits:', fruits);

// to get value of key in a map
console.log('Value of apple is',fruits.get('apple'));
// has
console.log('Existance of bananas is', fruits.get('bananas')?'True':'False');
//delete
fruits.delete('bananas');
console.log('Existance of bananas is', fruits.get('bananas')?'True':'False');

// Objects vs Maps
/*
    1. Objects : not directly iterable & Maps: Directly iterable
    2. Objects : not have size property & Maps: have size property
    3. Objects : Keys must be Strings & Maps: Can be any datatype
    4. Objects : Have default keys & Maps: Don't have
*/

// forEach
let text = '';
fruits.forEach(function(value, key){
    text += key + ' = ' + value + '\n';
})
console.log('text :\n',text);