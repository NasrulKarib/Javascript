/* 
    ~ Syntax - copyWithin(target, start, end)
    ~ default - start -> 0 and end -> array.length
    ~ overwrites original array
    ~ doesn't change the length
    ~ return modified array 
*/

let a = ['JS', 'C++', 'Python', 'Ruby', 'Go', 'C#', 'RUST']

a.copyWithin(3,2);
console.log(a);

