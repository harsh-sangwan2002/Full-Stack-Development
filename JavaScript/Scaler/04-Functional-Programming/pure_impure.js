// Example - 1
function sum(arr) {
    arr[0] = 0;
    let total = 0;

    for (let i = 0; i < arr.length; i++)
        total += arr[i];

    return total;
}

let newArr = [1, 2, 3, 4, 5];
// console.log(sum(newArr)); // 14
// console.log(newArr); // [0,2,3,4,5]

// Example - 2
function sum1() {
    let arr = arguments;
    arr[0] = 0;

    console.log(typeof arguments); // object
    let total = 0;
    for (let i = 0; i < arr.length; i++)
        total += arr[i];

    return total;
}

let i = 1, j = 2, k = 3, l = 4;
// console.log(sum1(i, j, k, l)); // 9
// console.log(i, j, k, l); // 1 2 3 4

// Example - 3
let newArr1 = [1, 2, 3, 4];
function sum3() {
    newArr1[0] = 0;
    let total = 0;

    for (let i = 0; i < newArr1.length; i++)
        total += newArr1[i];

    return total;
}

// console.log(sum3()); // 9
// console.log(newArr1);

newArr1[2] = 5;
// console.log(sum3());

// example - 4
var c = 0;

function sum4(a, b) {
    return a + b + c++;
}

console.log(sum4(1, 2)); // 3
console.log(sum4(1, 2)); // 4