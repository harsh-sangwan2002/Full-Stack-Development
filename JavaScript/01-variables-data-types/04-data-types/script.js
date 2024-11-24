/*************** 1.Primitive Data Types
 * 1) String - Sequence of characters. Must be in quotes or backticks
 * 2) Number - Integers as well as floating-point numbers
 * 3) Boolean - Logical entity / true or false
 * 4) Null - Intentional absence of any object
 * 5) Undefined - A variable that has not been defined yet
 * 6) Symbol - Built-in object whose constructor returns a unique symbol
 * 7) BigInt - Numbers that are greater than the "Number" type can handle **************/

// 1) string
const firstName = 'Sara';
console.log(firstName, typeof firstName);

// 2) number
let num = 23;
console.log(num, typeof num);
num = 23.4354;
console.log(num, typeof num);

// 3) boolean
let hasKids = false;
console.log(hasKids, typeof hasKids);

// 4) Null
let pointer = null;
console.log(pointer, typeof pointer);

// 5) undefined
var score;
console.log(score, typeof score);

// 6) bigint
num = 12376872364872634n;
console.log(num, typeof num);

// 7) symbol
let symbol = Symbol('5567');
console.log(symbol, typeof symbol);

/**************** 2.Reference Types(Objects) 
 * 1) Object literal
 * 2) Arrays
 * 3) Functions
 * ******************/
let arr = [1, 2, 3, 4];
console.log(arr, typeof arr);

let obj = { name: "Steve", age: 21 };
console.log(obj, typeof obj);

function sayHi() {
    console.log("Function said Hi!");
}
let hello = sayHi;
console.log(hello, typeof hello);