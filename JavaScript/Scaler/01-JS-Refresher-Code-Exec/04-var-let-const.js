console.log("line number 1", a);
var a = 10;
console.log("line number 3", a);
function fn() {
    console.log("line number 5", a);
    var a = 20;
    console.log("line number 7", a);

    function inner() {
        console.log("line number 10", a);
        var a;
        a = 30
        console.log("line number 13", a);
    }
    inner();
}
console.log("line number 17", a);
fn();
console.log("line number 19", a);

// 2nd Statement->
var f = 5;
function fn(){
    f = 6;
}
fn();
console.log(f);

/************************ var -> reassign & redeclaration is possible ************************/
var x = 10;
var x = 30; // redeclaration
console.log(x);
x = 40; // redefinition
console.log(x);

/************************ let -> only redeclaration is possible ************************/
let y = 10;
// redeclaration is not possbile
// let y = 30; 

y = 40; // redefinition

/************************ const -> Cannot be re-declared and re-assigned ************************/
const z = 50;
console.log(z);

let ax = 10;
{
    let ax = 20;
    console.log(ax);
}
console.log(ax);