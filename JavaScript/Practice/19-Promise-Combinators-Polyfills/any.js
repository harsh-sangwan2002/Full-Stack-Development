const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 1 resolved");
    }, 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 2 resolved");
    }, 2000);
});

// Resolves the first promise that resolves
// Throws AggregateError if all promises are rejected
const pr = Promise.any([p1, p2]);
pr.then((values) => {
    console.log("All promises resolved:", values);
}).catch((error) => {
    console.error("One or more promises rejected:", error);
})