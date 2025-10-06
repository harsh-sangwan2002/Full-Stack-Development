// 1. function declaration
function a() {
    console.log("a");
}

// 2. function expression
var b = function () {
    console.log("b");
}
b();

// 3. named function expression
var c = function d() {
    console.log("c");
}
c();

// 4. IIFE
(function () {
    console.log("IIFE");
})();

// 5. function constructor
var d = new Function("console.log('d')");
d();

// 6. arrow function
var e = () => {
    console.log("e");
}
e();

// 7. async function
async function f() {
    console.log("f");
}
f();

// 8. generator function
function* g() {
    console.log("g");
}
g();

// First class functions
// 1. Functions can be assigned to variables
// 2. Functions can be passed as arguments to other functions
// 3. Functions can be returned from other functions
// 4. Functions can be stored in data structures
// 5. Functions can be created at runtime
// 6. Functions can be used as callbacks