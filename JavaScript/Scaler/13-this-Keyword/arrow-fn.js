// window
console.log(this);

function fn() {
    // window
    console.log(this);
}

fn();

let obj = {
    name: "John",
    fn: function () {
        console.log(this);
        const outer = () => {
            // obj
            console.log(this);
            const inner = () => {
                // obj
                console.log(this);
            }
            inner();
        }
        outer();
    },
    fn2: () => {
        // window
        console.log(this);
    }
}

// obj
obj.fn();

obj.fn2();

let obj2 = obj.fn;
// window
obj2();