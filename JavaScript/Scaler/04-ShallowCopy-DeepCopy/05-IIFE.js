/*********** Function is also an object
 * object -> {key:value} pair
 * ***********/

function fn() {
    console.log("I am fn.");
}
console.log(typeof fn);
fn();
fn.count = 33;

// Add a property to fn
fn.showCount = function () {
    console.log(this.count);
}
fn.showCount();
console.log('---------------');

for (let key in fn) {
    console.log(key, fn[key]);
}

/**
 * Functions are objects which implements callable constructor
 * 0. Function are first class citizens in JS.
 * 1. Functions also behave as variables in JS.
 * 2. Assign a variable , pass a variable as a parameter, return a variable
 * */

// Function Expression
const addFn = function (a, b) {
    return a + b;
}
console.log(addFn(10, 20));
console.log(typeof addFn); // function

// HOF -> Function that takes in function as an argument or return it.
function outer() {
    fn();
    console.log("I am outer");
}

function inner() {
    console.log("I am inner");
}
outer(inner);

// Arrays are objects disguised as an array -> key are numbers
let arr = [
    1,
    1.1
    , true,
    null,
    "Hello",
    [1, 2, 3, 4, 5],
    {
        name: "Jasbir",
        FriendName: "Rajneesh"
    },
    function sayhi() {
        console.log(" I am a fn inside an array")
    }
]

for(let key in arr){
    console.log(key,arr[key]);
}

// IIFE function
// (function abc(param){
//     console.log("Hello ",param);
// })(10)