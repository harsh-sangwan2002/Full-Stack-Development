let obj = {
    firstName: "Harsh",
    lastName: "Sangwan",
    firstName(hometown, state) {
        console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state);
    }
}

let obj2 = {
    firstName: "Peter",
    lastName: "Parker"
}

Function.prototype.bind = function (obj, ...args1) {

    let temp = this;

    return function (...args2) {
        obj.fn = temp;
        obj.fn(args1, args1);
        delete obj.fn;
    }
}

const fn = obj.firstName.bind(obj2, "New York");
fn("USA");