var ourArray = ["John", 23];
var myArray = ["Quincy", 1];
ourArray = [["the universe", 42], ["everything", 101010]];

myArray = [["John", 23], ["dog", 3]];

myArray.push(["cat", 2]);
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.unshift(["Paul", 35]);
console.log(myArray);

myArray.shift();
console.log(myArray);