const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P1 rejected"), 3000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P2 rejected"), 1000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P3 success"), 2000);
})

// Returns the first promise that resolves or rejects
const pr = Promise.race([p1, p2, p3]);
pr.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})