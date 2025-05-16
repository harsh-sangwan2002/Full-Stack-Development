class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    }
}

const jessica = new Person('Jessica', 1991);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ == Person.prototype);

// 1. Class declarations are not hoisted
// 2. Classes are also first-class citizens
// 3. Classes are executed in strict-mode 