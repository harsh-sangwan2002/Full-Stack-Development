var arr = [1, 2, 3, 'harsh', true, Symbol('123')];
console.log(arr);

// Array uses 0 based indexing
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// arr.length -> find the length of an array
console.log(arr.length);

for (let i = 0; i < arr.length; i++)
    console.log(arr[i]);

console.log(arr instanceof Object);
console.log(arr instanceof Array);