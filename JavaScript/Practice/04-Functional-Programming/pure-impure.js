// Impure function
function sum(arr) {

    arr[0] = 0;
    let total = 0;

    for (let i = 0; i < arr.length; i++)
        total += arr[i];

    return total;
}

let newArr = [1, 2, 3, 4];
let result = sum(newArr);
console.log(result);

// Pure function
function sum2() {

    let arr = arguments, total = 0;

    for (let i = 0; i < arr.length; i++)
        total += arr[i];

    console.log(typeof arguments); // object
    console.log(arguments instanceof Array); // false
    return total;
}

let result2 = sum2(1, 2, 3, 4);
console.log(result2);

// Impure function
let c = 0;
function sum3(a, b) {

    return a + b + c++;
}

let result3 = sum3(1, 2);
console.log(result3);