let x;

const arr = [34,55,95,20,15];

arr.push(34);

arr.pop();

arr.unshift(99);

arr.shift();

x = arr.includes(20);

x = arr.indexOf(20);

x = arr.slice(1,4);

// changes the original array
x = arr.splice(1,4).reverse().toString().charAt(1);

console.log(x);