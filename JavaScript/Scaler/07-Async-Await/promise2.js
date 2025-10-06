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

// ES5
// createDummPromise(2000, '2sec').then(data => { console.log("then-> ", data); }).catch(err => { console.log("catch->", err); })
// createDummPromise(3000, '3sec').then(data => { console.log("then-> ", data); }).catch(err => { console.log("catch->", err); })
// createDummPromise(5000, '5sec').then(data => { console.log("then-> ", data); }).catch(err => { console.log("catch->", err); })
// createDummPromise(1000, '1sec').then(data => { console.log("then-> ", data); }).catch(err => { console.log("catch->", err); })

// ES6
try {
    // const r1 = await createDummPromise(3000, '3sec');
    // console.log(r1);

    // const r2 = await createDummPromise(4000, '4sec');
    // console.log(r2);

    // const r3 = await createDummPromise(20000, '20sec');
    // console.log(r3);

    // const r4 = await createDummPromise(1000, '1sec');
    // console.log(r4);

} catch (err) {
    console.log(err);
}

try {
    const res = await Promise.all([
        createDummPromise(20000, '20sec'),
        createDummPromise(3000, '3sec'),
        createDummPromise(4000, '4sec'),
        createDummPromise(1000, '1sec')]);

    // console.log(res);
} catch (err) {
    console.log(err);
}

try {

    const res = await Promise.allSettled([
        createDummPromise(20000, '20sec'),
        createDummPromise(3000, '3sec'),
        createDummPromise(4000, '4sec'),
        createDummPromise(1000, '1sec')]);

    console.log(res);
} catch (err) {
    console.log(err);
}