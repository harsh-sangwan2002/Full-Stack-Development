// Write a function that returns the no of times it has been called
function sum(a) {
    return function (b) {
        if (!b)
            return a;

        return sum(a + b);
    }
}

console.log(sum(1)()); // 1
console.log(sum(1)(2)()); // 3
console.log(sum(1)(2)(3)()); // 6
console.log(sum(1)(2)(3)(4)()); // 10