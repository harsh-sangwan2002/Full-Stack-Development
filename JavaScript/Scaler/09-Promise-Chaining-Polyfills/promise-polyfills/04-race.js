Promise.myPromiseRace = function (arrayOfPromises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arrayOfPromises)) {
            return reject(new TypeError("Invalid input, expected an array of promises"));
        }

        if (arrayOfPromises.length === 0) {
            // If the array is empty, return a promise that never resolves or rejects
            return;
        }

        arrayOfPromises.forEach(async (promise) => {
            try {
                const res = await promise;
                resolve(res);
            } catch (err) {
                reject(err);
            }
        });
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
Promise.myPromiseRace([p0, p1, p2])
    .then(console.log)
    .catch((err) => {
        console.log("Promise got rejected with error: " + err);
    });

// Real.
// Promise.race([p0, p1, p2])
//     .then(console.log)
//     .catch((err) => {
//         console.log("Promise got rejected with error: " + err);
//     });
