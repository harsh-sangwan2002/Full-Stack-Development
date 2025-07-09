let name = "Mosh", age = 30;
let person = {
    name: name,
    age: age,
    greet: function () {
        console.log("Hello " + this.name);
    }
};

// Dot notation
console.log(person.name);
console.log(person.age);
person.greet();

// Bracket notation
let key = "name";
console.log(person[key]);
console.log(person["age"]);
person["greet"]();