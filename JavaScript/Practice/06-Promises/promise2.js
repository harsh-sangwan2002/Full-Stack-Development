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

// ES5 using promise chaining
createDummyPromise(6000, "6 sec").then(data => console.log(data)).catch(err => console.log(err));
createDummyPromise(3000, "3 sec").then(data => console.log(data)).catch(err => console.log(err));
createDummyPromise(5000, "5 sec").then(data => console.log(data)).catch(err => console.log(err));
createDummyPromise(1000, "1 sec").then(data => console.log(data)).catch(err => console.log(err));