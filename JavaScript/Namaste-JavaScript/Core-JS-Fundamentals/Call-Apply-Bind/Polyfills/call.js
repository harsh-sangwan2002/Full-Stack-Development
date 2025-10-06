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

Function.prototype.call = function (obj, ...args) {

    let temp = this;
    obj.fn = temp;
    obj.fn(...args);
    delete obj.fn;
}

obj.firstName.call(obj2, "New York", "USA");