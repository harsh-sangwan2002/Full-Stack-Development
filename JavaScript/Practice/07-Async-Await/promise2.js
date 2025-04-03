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

    const r1 = await createDummyPromise(6000, "6 sec");
    console.log(r1);

    const r2 = await createDummyPromise(3000, "3 sec");
    console.log(r2);

    const r3 = await createDummyPromise(5000, "5 sec");
    console.log(r3);

    const r4 = await createDummyPromise(1000, "1 sec");
    console.log(r4);

} catch (err) {
    console.log(err);
}