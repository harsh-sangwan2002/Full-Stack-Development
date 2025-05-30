const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 2000);
});

// Return an array of results for all promises
const pr = Promise.allSettled([p1, p2]);
pr.then((values) => {
    console.log("All promises resolved:", values);
}).catch((error) => {
    console.error("One or more promises rejected:", error);
})