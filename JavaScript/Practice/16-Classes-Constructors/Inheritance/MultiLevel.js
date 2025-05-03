class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} eats food`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    bark() {
        console.log(`${this.name} barks`);
    }
}

class Puppy extends Dog {
    constructor(name, breed, age) {
        super(name, breed);
        this.age = age;
    }
    play() {
        console.log(`${this.name} plays`);
    }
}

var dog = new Dog("Buddy", "Golden Retriever");
var puppy = new Puppy("Max", "Labrador", 1);
dog.eat();
dog.bark();
puppy.eat();
puppy.bark();
puppy.play();