const arr = [1,2,3,4,5];

arr.reverse();
arr.unshift(6);
arr.push(0);

console.log(arr);

const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9,10];

let x = arr1.slice(0,4).concat(arr2);
console.log(x);