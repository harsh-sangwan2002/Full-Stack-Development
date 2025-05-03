"use strict";

console.log(this); // window

function fn() {
    console.log(this); // undefined
}
fn();

let obj = {
    name: 'John',
    fn: function () {
        console.log(this); // obj
        function test() {
            console.log(this); // undefined
        }
        test();
    },
    fn2: function () {
        console.log(this);
        function test() {
            console.log(this); // undefined
        }
        test();
    },
    fn3: () => {
        console.log(this); // window
    }
}
obj.fn();

let fn2 = obj.fn2;
fn2(); // undefined

obj.fn3();