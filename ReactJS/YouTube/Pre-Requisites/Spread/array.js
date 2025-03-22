let arr = [1, 2, 3];
let arr2 = arr;
let arr3 = [...arr];

arr2.push(10);
arr3.push(30);

console.log(arr);
console.log(arr2);