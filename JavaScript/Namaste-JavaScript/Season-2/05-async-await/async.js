const p = new Promise((resolve,reject)=>{
    resolve("Promise Resolved Value!!");
})

// Always returns a promise
async function getData() {

    // normal value will get promisified.
    // return "Namaste";

    // If return value is already a promise, it will not get promisified.
    return p;
}

const dataPromise = getData();
dataPromise.then(res => {
    console.log(res); // Namaste
}).catch(err => {
    console.log(err);
})