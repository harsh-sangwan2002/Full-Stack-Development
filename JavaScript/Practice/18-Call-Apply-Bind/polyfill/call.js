const obj1 = {
    name: "Steve",
    getName: function (age) {
        console.log(this.name + " is " + age + " years old");
    }
}

const obj2 = {
    name: "John"
}

Function.prototype.call = function (context, ...args) {

    context.fn = this;
    context.fn(...args);
    delete context.fn;
}

obj1.getName.call(obj2, 21);