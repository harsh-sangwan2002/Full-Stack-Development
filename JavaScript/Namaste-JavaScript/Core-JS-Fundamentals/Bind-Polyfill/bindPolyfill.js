let obj = {
    firstName: "Harsh",
    lastName: "Sangwan",
}

function printName() {
    console.log(`Hi! My name is ${this.firstName} ${this.lastName}`);
}

Function.prototype.myBind = function (...args) {
    let obj = this;
    let parms = args.slice(1);

    return function (...args2) {
        obj.call(args[0], ...parms, ...args2);
    }
}

const fn = printName.bind(obj);
fn();

const fn2 = printName.myBind(obj);
fn2();