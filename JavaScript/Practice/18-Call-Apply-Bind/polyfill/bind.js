const obj1 = {
    name: "Steve",
    getName: function (age) {
        console.log(this.name + " is " + age + " years old");
    }
}

const obj2 = {
    name: "John"
}

Function.prototype.bind = function (context, ...args1) {

    let obj = this;

    return function (...args2) {
        return obj.apply(context, [...args1, ...args2]);
    }
}

const boundedFn = obj1.getName.bind(obj2, 21);
boundedFn();