const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('p1 rejected');
    }, 1000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p2 resolved');
    }, 2000);
})

// Promise gets fulfilled or rejected as soon as one of the promises in the iterable is fulfilled or rejected
Promise.race([p1, p2]).then(value => {
    console.log(value);
}).catch(err => {
    console.log(err);
})