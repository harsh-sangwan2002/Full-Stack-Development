Introduction to Object-Oriented Programming
Object-Oriented Programming (OOP) in JavaScript involves structuring code in a way where we model real-world entities as objects. The object comprises properties and methods where properties are the characteristics, and methods are the actions the object can perform. OOP brings different concepts such as:

Classes and Objects: A class is a blueprint for creating objects. An object is an instance of a class.
Encapsulation: The bundling of data with the methods that operate on that data.
Inheritance: A mechanism by which one class can inherit properties and methods from another class.
Polymorphism: The ability to present the same interface for differing data types.
Constructors and Classes
What is a Constructor?
A constructor is a special method for creating and initializing an object created within a class. In JavaScript, the constructor keyword is used to define this method within class definitions.

Creating Classes
Using ES6 syntax, a class can be created using the class keyword, as shown below:

class Car {
constructor(model, color, price) {
this.model = model;
this.color = color;
this.price = price;
}

displayInfo() {
console.log(`This car is a ${this.color} ${this.model} and costs ${this.price}.`);
}
}
Creating an Instance: Instances of classes are created using the new keyword. For example, const myCar = new Car('Toyota', 'Red', 20000);.
Benefits of Class Syntax
The use of class syntax aligns closely with the syntax of other programming languages, making it easier for developers to transition into JavaScript. Class declarations are not hoisted, unlike functions【4:18†source】.

Inheritance
Inheritance in JavaScript allows a class to inherit properties and methods from another class. This is achieved using the extends keyword.

Example
class SportsCar extends Car {
constructor(model, color, price, maxSpeed) {
super(model, color, price); // Calls the constructor of the Car class.
this.maxSpeed = maxSpeed;
}

displaySpeed() {
console.log(`This sports car can reach a max speed of ${this.maxSpeed}.`);
}
}
super Keyword: Calls the parent class's constructor and is necessary in child classes that have a constructor【4:1†source】.
Prototypes and Prototypical Inheritance
Prototypes are a fundamental concept that underpins how inheritance works in JavaScript. Every function in JavaScript has a prototype property. JavaScript objects also have an internal property called [[Prototype]] or **proto** that points to the prototype object from which they inherit methods and properties.

Benefits of Prototypical Inheritance
Memory Efficiency: Methods can be defined once on the prototype, reducing memory usage【4:17†source】.
Dynamic Extension: Allows existing objects to be extended with new methods【4:12†source】.
Encapsulation and Private Properties
Encapsulation restricts access to certain components of an object and can simplify the interface of that object. JavaScript provides certain mechanisms to achieve encapsulation:

Private Fields: Introduced in the form of # prefixed fields in classes, making them private to the class instance.
class BankAccount {
#balance;

constructor(initialBalance) {
this.#balance = initialBalance;
}

getBalance() {
return this.#balance;
}
}
Patterns and Best Practices: While JavaScript does not strictly enforce private fields outside of #, developers often use naming conventions or closures to simulate private members《4:15†source》.
Analogies and Real-World Examples
Car Example: A Car class can have properties like model, color, and price, showing encapsulation and inheritance through a SportsCar subclass.
Gujia Mold: Classes are likened to molds in sweet-making, where each instance (or sweet) is derived from a common blueprint/mold, demonstrating the concept of classes and objects【4:9†source】.
Summary
The class covered the foundational concepts of OOP within the context of JavaScript, equipping learners with the knowledge to create structured, organized, and reusable code. Mastery of these concepts is critical for building scalable and maintainable web applications.
