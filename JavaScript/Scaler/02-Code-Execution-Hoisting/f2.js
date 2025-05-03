// Named function
console.log(sum(1, 2, 3, 4));
function sum(a, b, c) {
    let total = a + b + c;
    return total;
}

// Anonymous function
console.log(sum1(1, 2, 3, 4));
const sum1 = function (a, b, c) {
    let total = a + b + c;
    return total;
}