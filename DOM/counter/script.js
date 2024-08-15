let increment = document.querySelector('#increment');
let decrement = document.querySelector('#decrement');
let reset = document.querySelector('#reset');
let count = 0;

let header = function(count){
    let header = document.querySelector('#counter');
    header.innerText = count;
}

let incrementButton = function(){
    count = count + 1;
    header(count)
}
let decrementButton = function(){
    count = count - 1;
    header(count)
}
let resetButton = function(){
    count = 0;
    header(count)
}

increment.addEventListener('click', incrementButton);
decrement.addEventListener('click', decrementButton);
reset.addEventListener('click', resetButton);