// A callback is a function passed as an argument to another function.
function display(some){
    console.log(some);
}

function calculator(n1, n2, callback){
    let sum = n1 + n2;
    if(callback) callback(sum);
}

calculator(3,5,display);
// Promise
/* 

let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

    myResolve(); // when successful
    myReject();  // when error
    });

//"Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
    function(value) {code if successful},
    function(error) {  code if some error }
    );

*/


const condition = true;
const marks = 90;

function enroll(){
    console.log('Enroll process starts......');
    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(condition) resolve();
            else reject('Enroll Failed! Try again please');
        }, 2000);
    });
    return promise;
}
function progress(){
    console.log('Progressing...');
    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(marks >= 80) resolve();
            else reject("Sorry! You don't get enough marks to get a certificate");
        }, 3000);
    });
    return promise;

}
function getCertificate(){
    console.log('Your certifacate is preparing....');

    const promise = new Promise(function(resolve){
        setTimeout(function(){
            resolve('Congratulation for you achievement. You have got a certificate');
        }, 1000);
    });
    return promise;
}

enroll()
        .then(progress)
        .then(getCertificate)
        .then(function(value){
            console.log(value);
        })
        .catch(function(err){
            console.log(err);
        })


const promise1 = Promise.resolve('Promise1 resolved');

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise2 resolved')
    }, 2000)
})

promise1.then ((value) => {console.log(value)})
promise2.then ((value) => {console.log(value)})
// to print all promise together
Promise.all([promise1, promise2]).then((val) => {
    console.log(val);
})