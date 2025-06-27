function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function () {
    console.log(this.name + ' makes a noise.');
}

function Dog(name, breed) {
    Animal.call(this, name); // Call the parent constructor
    this.breed = breed;
}
Dog.prototype.bark = function () {
    console.log(this.name + ' barks.');
}

Dog.prototype.__proto__ = Animal.prototype; // Set the prototype chain

const dog = new Dog('Rex', 'German Shepherd');
dog.speak(); // Output: Rex makes a noise.
dog.bark(); // Output: Rex barks.