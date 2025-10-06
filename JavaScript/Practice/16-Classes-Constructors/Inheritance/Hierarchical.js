class Animal {

    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {

    bark() {
        console.log("Dog is barking");
    }
}

class Cat extends Animal {

    meow() {
        console.log("Cat is meowing");
    }
}

var dog = new Dog();
dog.bark();
dog.eat();

var cat = new Cat();
cat.meow();
cat.eat();