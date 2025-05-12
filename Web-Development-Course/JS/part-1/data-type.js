// 1. Primitive data type -> string, number, boolean, undefined, null, bigint, symbol
var x = "2";
console.log(typeof x);

x = 2;
console.log(typeof x);

x = true;
console.log(typeof x);

var y;
console.log(typeof y);

x = null;
console.log(typeof x);

x = BigInt('1236756723567567234234');
console.log(x);
console.log(typeof x);

x = Symbol('123');
console.log(x);
console.log(typeof x);

// 2. Non-Primitive data type -> function, object, array
function fn() {
    console.log("I am fn.")
}
console.log(typeof fn);

var obj = {
    name: "Harsh",
    age: 22
}
console.log(typeof obj);

var numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers);