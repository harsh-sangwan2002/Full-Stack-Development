// Closure is the combination of a function bundled with it's lexical environment.
function sum(x) {
    return function (y) {
        return x + y;
    }
}

const add5 = sum(5);

console.log(add5(2)); // 7
console.log(add5(3)); // 8
console.log(add5(4)); // 9
console.log(add5(5)); // 10

const counter = function () {
    let count = 0;
    return function () {
        return ++count;
    }
}

const myCounter = counter();

console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3
console.log(myCounter()); // 4
console.log(myCounter()); // 5