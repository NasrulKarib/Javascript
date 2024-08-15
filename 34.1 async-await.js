//async and await make promises easier to write"

// async makes a function return a Promise

// await makes a function wait for a Promise

const condition = true;
const marks = 90;

async function enroll(){
    console.log('Enroll process starts......');
    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(condition) resolve();
            else reject('Enroll Failed! Try again please');
        }, 2000);
    });
    return promise;
}

async function progress(){
    console.log('Progressing...');
    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(marks >= 80) resolve();
            else reject("Sorry! You don't get enough marks to get a certificate");
        }, 3000);
    });
    return promise;

}

async function getCertificate(){
    console.log('Your certifacate is preparing....');

    const promise = new Promise(function(resolve){
        setTimeout(function(){
            resolve('Congratulation for you achievement. You have got a certificate');
        }, 1000);
    });
    return promise;
}

async function course(){
    try{
        // The await keyword makes the function pause the execution and wait for a resolved promise before it continues
        await enroll();
        await progress();
        const msg = await getCertificate();
        console.log(msg);
    }
    catch(err){
        console.log(err);
    }
}

course();