const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 1 resolved");
    }, 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 2000);
});

Promise.race = function (promises) {
    return new Promise((resolve, reject) => {

        promises.forEach((promise) => {

            promise.then(resolve).catch(reject);
        });
    });
}

// Resolves/rejects as soon as one of the promises resolves/rejects
const pr = Promise.race([p1, p2]);
pr.then((values) => {
    console.log("All promises resolved:", values);
}).catch((error) => {
    console.error("One or more promises rejected:", error);
})