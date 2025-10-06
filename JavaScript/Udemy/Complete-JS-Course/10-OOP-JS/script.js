'use strict';
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} is linked to protoype
// 4. function automatically returns {}
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this
    // this.calcAge = () => {
    //     return 2037 - this.birthYear;
    // }
}

Person.prototype.calcAge = function () {
    return 2037 - this.birthYear;
}

const Jonas = new Person("Jonas", 1991);
const Matilda = new Person("Matilda", 1992);
const Jack = new Person("Jack", 2002);
const Jay = "Jay";

console.log(Jonas);
console.log(Matilda);
console.log(Jack);
console.log(Jonas.calcAge());
console.log(Matilda.calcAge());
console.log(Jack.calcAge());
console.log(Person.prototype);

console.log(Jonas instanceof Person);
console.log(Jay instanceof Person);

console.log(Jonas.__proto__);
console.log(Jonas.__proto__ == Person.prototype);
console.log(Person.prototype.isPrototypeOf(Jonas));
console.log(Person.prototype.isPrototypeOf(Matilda));
console.log(Person.prototype.isPrototypeOf(Person));
console.log(Person.prototype.constructor == Person);

console.log(Jonas.__proto__.__proto__); // Object.prototype
console.log(Jonas.__proto__.__proto__.__proto__); // null
console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 4, 4, 3, 2];
Array.prototype.unique = function () {
    return [...new Set(this)];
}

console.log(arr.unique());