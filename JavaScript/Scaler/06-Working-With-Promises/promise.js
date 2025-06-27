// Promises are used to handle tasks that take time to complete, such as network requests or file operations.
const promise = new Promise((resolve, reject) => {

    const isHead = Math.random() > 0.5

    if (isHead)
        resolve('head');

    else
        reject('tail');
})

promise.then(data => {
    console.log("then -> ", data);
}).catch(err => {
    console.log("catch ->", err);
})