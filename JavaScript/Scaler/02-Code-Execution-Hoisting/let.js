// It is hoisted inside Script scope

// console.log(x);
let x = 10;
console.log(x); // 10

// We cannot re-declare the variable
// let x = "Smith";

// We can re-assign the value
x = "Smith";
console.log(x); // Smith