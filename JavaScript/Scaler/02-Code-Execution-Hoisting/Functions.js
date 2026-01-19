// 1. Named function / function declaration
function sum(a, b, c) {
    let total = a + b + c;
    return total;
}
console.log(sum(1, 2, 3, 4));

// 2. Anonymous function
const sum1 = function (a, b, c) {
    let total = a + b + c;
    return total;
}
console.log(sum1(1, 2, 3, 4));

// 3. Arrow function
let sum2 = (a, b, c) => {
    let total = a + b + c;
    return total;
}
sum2 = (a, b, c) => a + b + c;
console.log(sum2(1, 2, 3));

// 4. Named function expression
sum2 = function fn(a, b, c) {
    return a + b + c;
}
console.log(sum2(1, 2, 3));

// 5. Immediately Invoked Function Expression (IIFE)
sum2 = (function fn(a, b, c) {
    return a + b + c;
})(1, 2, 3);
console.log(sum2);