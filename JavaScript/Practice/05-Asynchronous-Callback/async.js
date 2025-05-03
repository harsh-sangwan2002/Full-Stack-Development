// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 1000);

// setTimeout(() => {
//     console.log("D");
// }, 3000);

// setTimeout(() => {
//     console.log("E");
// }, 1000);

// console.log("C");

console.log("A");

setTimeout(() => {
    console.log("B");
}, 1000);

Promise.resolve('C').then(val => console.log(val));

console.log('D');