const obj1 = {
    name: "Steve",
    getName: function (age) {
        console.log(this.name + " is " + age + " years old");
    }
}

const obj2 = {
    name: "John"
}

const boundedFn = obj1.getName.bind(obj2, 21);
boundedFn();