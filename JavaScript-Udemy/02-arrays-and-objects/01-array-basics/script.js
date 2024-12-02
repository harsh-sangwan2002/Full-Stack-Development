/********* 
 * 1. Arrays are a special type of objects in JS that store multiple values. 
 * 2. They are 0-based indexed. **********/

// Array literal
const numbers = [12,45,63,88];
console.log(numbers);

// Array Constructor
const fruits = new Array('Apple','Grapes','Orange');
console.log(fruits);

x = numbers[0];
x = numbers[0]+numbers[3];

x = numbers.length;

fruits[2] = 'Pineapple';
// fruits.length = 2;

console.log(x);
console.log(fruits);