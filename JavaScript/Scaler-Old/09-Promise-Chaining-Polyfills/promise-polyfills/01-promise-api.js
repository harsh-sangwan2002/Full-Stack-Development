// function promiseSetTimeOut(delay){

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('Hi There!!!');
//         },delay)
//     })
// }

// promiseSetTimeOut(1000).then(data=>{
//     console.log(data);
// }).catch(err=>{
//     console.log(err);
// })

/****************** Polyfill of promise api using 'executeFn' *****************/
// Function constructor

const PENDING = "PENDING";
const RESOLVED = "RESOLVED";
const REJECTED = "REJECTED";
function CustomPromise() {

    // Add required properties and methods
    // Promise does not expose the properties
    let PROMISE_STATE = PENDING;
    let RESULT_VALUE = undefined;

    let SUCCESS_CALLBACK_ARRAY = []; // It can be a queue
    let FAILURE_CALLBACK_ARRAY = []; // It can be a queue

    // attach resolve -> resolve only once
    const resolve = (value) => {

        if (PROMISE_STATE !== PENDING)
            return;

        PROMISE_STATE = RESOLVED;
        RESULT_VALUE = value;

        // Call all your success from callBack array
        SUCCESS_CALLBACK_ARRAY.forEach(callBack => {
            callBack(RESULT_VALUE);
        })
    }

    // attach reject -> reject only once
    const reject = (error) => {

        if (PROMISE_STATE !== PENDING)
            return;

        PROMISE_STATE = REJECTED;
        RESULT_VALUE = error;

        // Call all your failure from callBack array
        FAILURE_CALLBACK_ARRAY.forEach(callBack => {
            callBack(RESULT_VALUE);
        })
    }

    // Thread then will resolve.
    /** 1. If Promise is resolved It doesn't matter how many times we invoke then() everytime we will get same resopose for same promise. Means Promise result should be Idempotent. */
    this.then = function (cb) {
        if (PROMISE_STATE === RESOLVED)
            cb(value);
        else if (PROMISE_STATE === PENDING)
            SUCCESS_CALLBACK_ARRAY.push(cb);
    }

    // Thread catch will reject.
    /** 1. If Promise is rejected It doesn't matter how many times we invoke catch() everytime we will get same error for same promise. Means Promise result should be Idempotent. */
    this.catch = function (cb) {
        if (PROMISE_STATE === REJECTED)
            cb(value);
        else if (PROMISE_STATE === PENDING)
            FAILURE_CALLBACK_ARRAY.push(cb);
    }

    executeFn(resolve, reject);
}

const executeFn = (resolve, reject) => {
    //cb based fn
    setTimeout(() => {
        resolve('Hey there! I am resolved.');
    }, 1000)

    setTimeout(() => {
        reject('Hey there! I am rejected.');
    }, 1000)
}

// Usage of customPromise
const myPromise = new CustomPromise(executeFn);

const cb = (data) => {
    console.log(data);
}

console.log("Before");

myPromise.then(cb);
myPromise.then(cb);
myPromise.then(data => {
    console.log("I am the second then.", data);
});

myPromise.catch(err => {
    console.log(err);
});
myPromise.catch(err => {
    console.log("I am the second catch.");
});

console.log("After");