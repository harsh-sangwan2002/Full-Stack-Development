// window
// console.log(this);

function fn() {
    // window
    console.log(this);
}
// fn();

let obj = {
    name: "Harsh",
    fn: fn
}

// obj
// obj.fn();

function fn() {

    // obj
    console.log(this);
    function abc() {

        // window
        console.log(this);
    }
    abc();
}

obj = {
    name: "Harsh",
    fn: fn
}
// obj.fn();

// Method - 1 (bind)
function fn() {

    // obj
    console.log(this);
    function abc() {

        // window
        console.log(this);
    }
    abc.bind(this);
}

obj = {
    name: "Harsh",
    fn: fn
}
// obj.fn();

// Method - 2 (arrow function)
function fn() {

    // obj
    console.log(this);
    const abc = () => {

        // window
        console.log(this);
    }
    abc();
}

obj = {
    name: "Harsh",
    fn: fn
}
obj.fn();