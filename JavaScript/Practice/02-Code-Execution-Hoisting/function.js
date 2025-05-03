// 1. function declaration
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));

// 2. function expression / anonymous function
const sum2 = function (a, b) {
    return a + b;
}
console.log(sum2(1, 2));

// 3. arrow function
const sum3 = (a, b) => a + b;
console.log(sum3(1, 2));