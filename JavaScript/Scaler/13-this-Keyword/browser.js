// window
console.log(this);

function fn(){
    // window
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
// window
obj2();