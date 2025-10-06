function runMLAlgo(cb){
    console.log("Running ML Algo.");
    console.log("Processing payment.");

    cb();
    cb();
    cb();

    console.log("Payment done.");
}

function promiseRunMlALgo(cb){
    return new Promise((resolve,reject)=>{
        console.log("Running Ml Algo..");
        console.log("Processing payment");
        setTimeout(()=>{
            resolve('Payment done.');
        },1000)
    })
}

module.exports = {
    runMLAlgo,
    promiseRunMlALgo,
}