function createDummPromise(delay, message) {
    return new Promise((resolve, reject) => {
        const TIMEOUT = 5000;
        if (delay > TIMEOUT) {
            setTimeout(() => {
                reject('Timeout')
            }, TIMEOUT)
        } else {
            setTimeout(() => {
                resolve(message)
            }, delay)
        }
    })
}

createDummPromise(2000, '2sec').then(data => { console.log("then-> ", data); }).catch(err => { console.log("catch->", err); })
createDummPromise(3000, '3sec').then(data => { console.log("then-> ", data); }).catch(err => { console.log("catch->", err); })
createDummPromise(5000, '5sec').then(data => { console.log("then-> ", data); }).catch(err => { console.log("catch->", err); })
createDummPromise(1000, '1sec').then(data => { console.log("then-> ", data); }).catch(err => { console.log("catch->", err); })