/****************** Function constructor before ES6 *************/
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayHi = function () {
//         console.log(`I am ${this.name} and I am ${this.age} years old.`);
//     }

//     this.sayHi();
// }

// Person("Harsh", 21);

// const subham = new Person("Subham", 24);
// subham.sayHi();

/****************** Class after ES6:  *************/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        console.log(`Hi I am ${this.name} and I am ${this.age} years old.`);
    }
    sayBye() {
        console.log(`Hi I am ${this.name} and I am ${this.age} years old. Have a nice day!`);
    }
}

class SuperHuman extends Person {
    constructor(name, age) {
        super(name, age);
    }
    sayHi() {
        console.log(`Hi I am ${this.name} and I am ${this.age} years old. I want to say Hi.`);
    }
}

const harsh = new Person("Harsh", 21);
harsh.sayHi();
harsh.sayBye();

const rajneesh = new SuperHuman("Rajneesh", 26);
rajneesh.sayHi();
rajneesh.sayBye();

/****************  Class over Function/Object
1. Readability is improved and easy to understand.
2. Class remove the conflict, that a function can behave like a object.
3. Class is suppose to construct only not called by someone.
****************/