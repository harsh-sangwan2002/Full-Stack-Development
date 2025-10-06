const arr = [1, 2, 3, 4, 5];

const evenValues = arr.filter((item) => item % 2 === 0);
const oddValues = arr.filter((item) => item % 2 !== 0);

console.log(evenValues);
console.log(oddValues);