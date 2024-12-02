// 1st Statement-> Function is also an object 
let a = 10;
console.log(a);

fn();
function fn(){
    console.log("I am fn.");
    function inner(){
        console.log("I am inner.");
    }
    inner();
}

/****
 * Exceution context : 
 *      1. It either belong to the code outside every function 
 *      2. whenever a function is called
 * 
 * Execution context contains
 *      * access to it's varibales and functions
 *      * access to the code you write
 *        
 * Exceution context actually runs in the call stack 
 *      1. creation
 *             a.  memory allocation  -> 
 *                      1)variables : undefined
 *                      2))function : memory allocated 
 *      2. execution  -> left to right , top to bottom 
 * **/

console.log("b",b);
var b = 10;

real();
function real(){
    console.log("I am real. Always run me.");
}
function real(){
    console.log("No, I am the real one.");
}
function real(){
    console.log("You both are wasted.");
}

// JS always provides the logic
// Features are provided by the environment - Node.js, Browser, etc.
console.log(window);