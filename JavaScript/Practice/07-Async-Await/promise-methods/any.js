function createDummyPromise(delay, message) {

    return new Promise((resolve, reject) => {

        const TIMEOUT = 5000;
        const currentDelay = Math.min(delay, TIMEOUT);

        setTimeout(() => {
            if (delay > TIMEOUT)
                reject(`Max delay can be 5000ms, current delay is ${delay}ms`);

            else
                resolve(message);
        }, currentDelay);
    })
}

// ES6 using async/await
try {

    // Promise.any returns the first promise that resolves
    // If all promises reject, it returns an AggregateError
    const result = await Promise.any([
        createDummyPromise(2000, "Promise 1"),
        createDummyPromise(3000, "Promise 2"),
        createDummyPromise(4000, "Promise 3"),
        createDummyPromise(5000, "Promise 4"),
    ])

    console.log(result);

} catch (err) {
    console.log(err);
}