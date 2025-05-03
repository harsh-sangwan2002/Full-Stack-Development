Promise.myPromiseAllSettled = function (arrayOfPromises) {
    return new Promise(async (resolve, reject) => {
        if (!Array.isArray(arrayOfPromises)) {
            return reject(new TypeError("Invalid input, expected an array of promises"));
        }

        if (arrayOfPromises.length === 0) {
            // If the array is empty, return a promise that never resolves or rejects
            return;
        }

        const results = await Promise.all(
            arrayOfPromises.map(async (promise) => {
                try {
                    const value = await Promise.resolve(promise);
                    return { status: "fulfilled", value };
                } catch (reason) {
                    return { status: "rejected", reason };
                }
            })
        );

        return results;
    });
};


/** --------------------------Consuption-------------------------- */
// when all the promises are resolved
// const p0 = Promise.reject(3);
// const p1 = 42;
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Foo");
//     }, 1000);
// });

// Promise.myPromiseAny([p0, p2])
//     .then(console.log)
//     .catch((err) => {
//         console.log("Promise got rejected with error: " + err);
//     });


// when any of the promises got rejected
const p0 = Promise.reject(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Foo");
    }, 1000);
});

// Our Method
Promise.myPromiseAllSettled([p0, p1, p2])
    .then(console.log)
    .catch((err) => {
        console.log("Promise got rejected with error: " + err);
    });

// Real.
// Promise.allSettled([p0, p1, p2])
//     .then(console.log)
//     .catch((err) => {
//         console.log("Promise got rejected with error: " + err);
//     });
