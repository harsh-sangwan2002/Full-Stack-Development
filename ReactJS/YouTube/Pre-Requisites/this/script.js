// window
console.log(this);

function fn() {
    // window
    console.log(this);
}
fn();

let obj = {
    name: "Harsh",
    func: fn
}

// self object
obj.func();

function fn() {
    console.log(this);
    function abc() {
        console.log(this);
    }
    let ret = abc.bind(this);
    ret();
}
fn();