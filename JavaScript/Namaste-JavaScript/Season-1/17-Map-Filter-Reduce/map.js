const arr = [5, 1, 2, 4, 3];

// Double
let newArr = arr.map((item) => item * 2);
console.log(newArr);

// Triple
newArr = arr.map((item) => item * 3);
console.log(newArr);

// Binary
newArr = arr.map((item) => item.toString(2));
console.log(newArr);