Promise.myPromiseAny = function (arrayOfPromises) {
    return new Promise((resolve, reject) => {

        if (!Array.isArray(arrayOfPromises)) {
            reject("Invalid input, expected an array of promises");
        }

        let resolved = false;
        let errors = [];

        arrayOfPromises.forEach(async (promise) => {
            try {

                const result = await promise;

                if (resolved)
                    resolve(result);

                resolved = true;
            } catch (err) {
                errors.push(err);
                if (errors.length === arrayOfPromises.length) {
                    reject("AggreateError: All promises were rejected");
                }
            }
        })
    })
}


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
const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Foo");
    }, 1000);
});

// Our Method
Promise.myPromiseAny([p0, p1, p2])
    .then(console.log)
    .catch((err) => {
        console.log("Promise got rejected with error: " + err);
    });

// Real.
Promise.any([p0, p1, p2])
    .then(console.log)
    .catch((err) => {
        console.log("Promise got rejected with error: " + err);
    });
