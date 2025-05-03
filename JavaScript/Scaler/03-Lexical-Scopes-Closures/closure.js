function sum(x) {

    let inner = function (y) {
        return x + y;
    }

    return inner;
}

const sum1 = sum(1);
// console.log(typeof sum1); // function
// console.log(sum1(5)); // 6
// console.log(sum1(6)); // 7
// console.log(sum1(7)); // 8

const sum2 = sum(2);
// console.log(typeof sum1); // function
// console.log(sum2(5)); // 7
// console.log(sum2(6)); // 8
// console.log(sum2(7)); // 9

const counter = function () {
    let count = 0;
    return function () {
        return ++count;
    }
}

const myCounter = counter();
// console.log(myCounter()); // 1
// console.log(myCounter()); // 2
// console.log(myCounter()); // 3
// console.log(myCounter()); // 4
// console.log(myCounter()); // 5
// console.log(myCounter()); // 6
// console.log(myCounter()); // 7

function sum() {
    // code
    let res = {}
    return function (arr) {
        // code
        let key = String(arr);
        if (res[key])
            return res[key];

        const total = arr[0] + arr[1];
        res[key] = total;
        return res[key];
    }
}

const memorisedSum = sum();
console.log(memorisedSum([1, 2])); // compute
console.log(memorisedSum([1, 2])); // memory

console.log(memorisedSum([2, 2]));
console.log(memorisedSum([3, 2]));

console.log(memorisedSum([1, 2]));
console.log(memorisedSum([2, 2]));
console.log(memorisedSum([3, 2]));