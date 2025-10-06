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

Promise.all = function (promises) {

    return new Promise((resolve, reject) => {

        const res = [];
        let resolvedCount = 0;

        promises.forEach((promise, index) => {
            promise.then((value) => {
                res[index] = value;
                resolvedCount++;

                if (resolvedCount === promises.length) {
                    resolve(res);
                }
            }).catch((error) => {
                reject(error);
            });
        });
    })
}

// Resolves all promises when all are resolved
// If any promise is rejected, the whole promise is rejected
const pr = Promise.all([p1, p2]);
pr.then((values) => {
    console.log("All promises resolved:", values);
}).catch((error) => {
    console.error("One or more promises rejected:", error);
})