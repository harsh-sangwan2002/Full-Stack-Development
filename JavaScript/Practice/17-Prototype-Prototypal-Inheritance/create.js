// 1. Object literal
var obj = {
    id: 1,
    name: "Steve"
}

// 2. Function constructor
function Person(id, name) {
    this.id = id;
    this.name = name;
}
var person1 = new Person(1, "Steve");

// 3. Class syntax
class Person2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
var person2 = new Person2(2, "John");

// 4. Object.create
var obj2 = Object.create(obj);
console.log(obj2);