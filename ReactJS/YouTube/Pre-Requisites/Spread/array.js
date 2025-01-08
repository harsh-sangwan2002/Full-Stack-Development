let arr = [1, 2, 3];

let arr2 = arr;
arr2.push(4);

let arr3 = [...arr];
arr3[1] = 20;

console.log(arr);
console.log(arr2);
console.log(arr3);