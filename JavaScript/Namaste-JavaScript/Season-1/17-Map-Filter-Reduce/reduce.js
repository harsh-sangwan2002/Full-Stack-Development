const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const maxValue = arr.reduce((acc, item) => acc = Math.max(acc, item), arr[0]);
console.log(maxValue);