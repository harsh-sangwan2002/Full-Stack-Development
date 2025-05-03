/************ setTimeout -> clearTimeout ************/

// console.log("Before");
// function cb() {
//     console.log("setTimeout cb has been called.")
// }

// setTimeout(cb,5000);

// const timerId = setTimeout(cb, 2000);
// setTimeout(canceller, 2000);
// console.log("Timer Id: ", timerId);

// function canceller() {
//     console.log("Cancelling the setTimeout");
//     clearTimeout(timerId);
// }


// console.log("After");

/************ setInterval, clearInterval *********/


//  cb -> of setTimeout -> higher precedence then cb of setInterval -> why precedence of SINt<STime
console.log("Before");

function cb(){
    console.log("setInterval called ",Date.now());
}

// setInterval(cb,2000);

const timerId = setInterval(cb,1000);

function cancelInterval(){
    console.timeEnd();
    console.log("Cancelling the interval timer.");
    clearInterval(timerId);
}

console.time();
setTimeout(cancelInterval,5000);

console.log("After");

//  cb of setTimout has higher precedence than cb of setInterval -> why precedence of setInterval<setTimeout