Function.prototype.myBind = function (context, ...args) {

    let obj = this;

    return function (...args2) {
        obj.call(context, ...args, ...args2);
    }
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

var bindedFn = obj.fullName.myBind(obj2, "Ms.");
bindedFn();