/*********** Lexical Scope -> A function bound with its environment creates a lexical scope 
 * The outer scope is determined wrt function definition **************/

let x = 10;
function fn() {
    console.log("Value of x is: ", x);
}
fn();

var varName = 10;
function b() {
    console.log("In b", varName);
}

function fn() {
    var varName = 20;
    // fn call
    b();
    console.log(varName);
}
fn();

var varName = "I'm here";
function fn() {
    var varName = 10;
    function inner() {
        function inner2() {
            console.log(varName); // 10
        }
        inner2();
        console.log(varName); // 10
    }

    inner();
    console.log(varName); // 10
}

fn();