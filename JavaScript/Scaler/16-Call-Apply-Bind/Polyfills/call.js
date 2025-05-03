Function.prototype.myCall = function (context, ...args) {

    let obj = this;

    context = context || window;
    context.fn = obj;
    context.fn(...args);

    delete context.fn;
}

var obj = {
    name: "Aashi",
    fullName: function (prefix) {
        console.log(`${prefix} ${this.name}`);
    }
}

var obj2 = {
    name: "Purva"
}

obj.fullName.myCall(obj2, "Ms.");