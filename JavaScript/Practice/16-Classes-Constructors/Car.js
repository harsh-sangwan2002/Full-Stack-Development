// Using normal variable declaration will not expose the variables to the global scope
// Constructor function to create a car object
function Car(model, color, price, tax) {
    this.model = model;
    this.color = color;
    this.price = price;
    this.tax = tax;
}

Car.prototype.finalPrice = function () {
    return this.price + this.tax;
}

// Class syntax to create a car object
class CarClass {

    constructor(model, color, price, tax) {
        this.model = model;
        this.color = color;
        this.price = price;
        this.tax = tax;
    }

    finalPrice() {
        return this.price + this.tax;
    }
}

var car1 = new Car("BMW", "black", 50000, 2000);
var car2 = new Car("Mercedes", "white", 60000, 3000);
var car3 = new Car("Audi", "red", 70000, 4000);

console.log(car1.finalPrice());
console.log(car2.finalPrice());
console.log(car3.finalPrice());
console.log(Car)

var carClass1 = new CarClass("BMW", "black", 50000, 2000);
var carClass2 = new CarClass("Mercedes", "white", 60000, 3000);
var carClass3 = new CarClass("Audi", "red", 70000, 4000);

console.log(carClass1.finalPrice());
console.log(carClass2.finalPrice());
console.log(carClass3.finalPrice());
console.log(carClass1)