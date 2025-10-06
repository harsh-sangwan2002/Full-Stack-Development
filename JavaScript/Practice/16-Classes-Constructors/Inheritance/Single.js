class Car {
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

class SuperCar extends Car {
    constructor(model, color, price, tax, speed) {
        this.speed = speed;
        super(model, color, price, tax);
    }
}

var car1 = new Car("BMW", "black", 50000, 2000);
var superCar1 = new SuperCar("Ferrari", "red", 200000, 5000, 300);
console.log(car1.finalPrice());
console.log(superCar1.finalPrice());