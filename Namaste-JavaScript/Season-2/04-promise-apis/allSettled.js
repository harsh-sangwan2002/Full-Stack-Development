const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P1 rejected"), 3000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P2 rejected"), 1000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P3 success"), 2000);
})

// Promise fullfilled when all promises are fullfilled
// Promise gives all the result of the promises even if some of them are rejected
const pr = Promise.allSettled([p1, p2, p3]);
pr.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})