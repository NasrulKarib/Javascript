const sent = 'Learn with Arian is all about teaching technical skills. If you are just getting started in CS journey, Learn with Arian has all the tools you need to know. You can also learn latest and advanced tech with learn with Arian.'
// How many times 'Arian' occurs and ans the first occurence
let time = sent.search(/Arian/i);
let occur = sent.match(/Arian/g);
console.log(`First Occurence is in ${time} no index and total number is ${occur.length}`);

// Implementing linear search
function linearSearch(array, value){
    let len = array.length;
    let count = 0;
    for (let i = 0 ; i < len; i++){
        if(array[i] === value) count++;
    }
    return count > 0 ? count : 'Not Found'; 
}

const arr = ['a', 'b', 'c', 'd', 'e', 'c'];
let val = 'c';
console.log(`Occurence of ${val} is `, linearSearch(arr,val));

// Find longest String from an Array and return its index
function longestString(arr){
    let len = arr.length;
    let slen = 0;
    let idx = 0
    for(let i = 0 ; i < len; i++){
        let x = arr[i].length;
        if(x > slen){
            slen = x;
            idx = i;
        } 
    }
    return idx;
}

const str = ['Arian','Bangladesh','Chittagong',"Cox's Bazar"];
let x = longestString(str);
console.log(`Longest array index is ${x} and String is ${str[x]}`)
