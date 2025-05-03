"use strict"
// window
console.log(this);

function fn(){
    // undefined
    console.log(this);
}

fn();

let obj = {
    name:"John",
    fn:function(){
        console.log(this);
    }
}

// obj
obj.fn();

let obj2 = obj.fn;
// undefined
obj2();