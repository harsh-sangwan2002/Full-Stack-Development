const obj1 = {
    name: "Steve",
    getName: function (age) {
        console.log(this.name + " is " + age + " years old");
    }
}

const obj2 = {
    name: "John"
}

obj1.getName.apply(obj2, [21]);