function createDummPromise(delay, message) {
    return new Promise((resolve, reject) => {
        const TIMEOUT = 5000;
        const maxDelay = Math.min(delay, TIMEOUT);

        setTimeout(() => {
            if (delay > TIMEOUT)
                reject(`Max delay can be 5000ms current delay: ${message}`)

            else
                resolve(message);
        }, maxDelay);
    })
}

createDummPromise(2000, '2sec').then(data => { console.log("then-> ", data); }).catch(err => { console.log("catch->", err); })
createDummPromise(3000, '3sec').then(data => { console.log("then-> ", data); }).catch(err => { console.log("catch->", err); })
createDummPromise(5000, '5sec').then(data => { console.log("then-> ", data); }).catch(err => { console.log("catch->", err); })
createDummPromise(1000, '1sec').then(data => { console.log("then-> ", data); }).catch(err => { console.log("catch->", err); })