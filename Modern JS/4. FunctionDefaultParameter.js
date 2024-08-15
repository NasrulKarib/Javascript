function myFunc(x = 10){
    return x;
}

console.log(myFunc());
console.log(myFunc(5));
console.log(myFunc(undefined));
console.log(myFunc(null));