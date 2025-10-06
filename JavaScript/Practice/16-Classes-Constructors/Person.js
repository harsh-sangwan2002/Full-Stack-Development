class Person {

    static population = 0;
    #privateVar;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        Person.population++;
    }

    getPopulation() {
        return Person.population;
    }

    getName() {
        console.log("Name: " + this.name);
    }

    static getPopulationStatic() {
        return Person.population;
    }
}

class SuperPerson extends Person {

    constructor(name, age, superPower) {
        super(name, age);
        this.superPower = superPower;
    }

    getSuperPower() {
        console.log("Super Power: " + this.superPower);
    }

    getName() {
        console.log("Super Name: " + this.name);
    }
}

const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);
const person3 = new Person("Doe", 40);

const superPerson1 = new SuperPerson("Superman", 35, "Flying");
const superPerson2 = new SuperPerson("Batman", 32, "Martial Arts");

console.log(person1.name);
console.log(person2.age);
console.log(person3.getPopulation());

// This will throw an error because #privateVar is private
// console.log(person1.#privateVar); 

console.log(SuperPerson.population)
person1.getName();
superPerson1.getName();
superPerson1.getSuperPower();