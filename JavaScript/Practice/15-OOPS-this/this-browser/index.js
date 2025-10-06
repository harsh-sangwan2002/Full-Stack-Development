console.log(this); // window

function fn() {
    console.log(this); // window
}
fn();

let obj = {
    name: 'John',
    fn: function () {
        console.log(this); // obj
        function test() {
            console.log(this);
        }
        test();
    },
    fn2: function () {
        console.log(this);
        function test() {
            console.log(this);
        }
        test();
    },
    fn3: () => {
        console.log(this); // window
    }
}
obj.fn();

let fn2 = obj.fn2;
fn2(); // window

obj.fn3();