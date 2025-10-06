const {runMLAlgo,promiseRunMlALgo} = require('./lib.js');

console.log("Before");

let amount = 100;
let priceOfOne = 20;

// runMLAlgo(cb);
function cb(){
    amount-=priceOfOne;
    console.log("Amount ",amount);
}

const promise = promiseRunMlALgo();
promise.then((info)=>{
    console.log(info);
    cb();
}).catch(err=>{
    console.log(err);
})

console.log("After");