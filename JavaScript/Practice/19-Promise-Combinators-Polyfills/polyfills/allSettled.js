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

Promise.allSettled = function (promises) {

    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;

        promises.forEach((promise, index) => {
            promise.then(value => {
                results[index] = { status: 'fulfilled', value };
            }).catch(reason => {
                results[index] = { status: 'rejected', reason };
            }).finally(() => {
                completed++;
                if (completed === promises.length) {
                    resolve(results);
                }
            });
        });
    });
}

// Return an array of results for all promises
const pr = Promise.allSettled([p1, p2]);
pr.then((values) => {
    console.log("All promises resolved:", values);
}).catch((error) => {
    console.error("One or more promises rejected:", error);
})