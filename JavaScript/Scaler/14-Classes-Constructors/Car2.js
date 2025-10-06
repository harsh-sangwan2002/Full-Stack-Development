class Car {

    static noOfWheels = 4;
    #trackingId = 123;

    constructor(model, color, price, tax) {
        this.model = model;
        this.color = color;
        this.price = price;
        this.tax = tax;
        this.#trackingId = 123456;
    }

    static staticMethod() {
        console.log("I am a static method");
    }

    getTrackingId() {
        return this.#trackingId;
    }


    totalPrice() {
        return this.price + this.tax;
    }
}

class SuperCar extends Car {
    constructor(model, color, price, tax, speed) {
        super(model, color, price, tax);
        this.speed = speed;
    }
}

let car = new SuperCar('BMW', 'Black', 100000, 20000, 400);
console.log(car);
Car.staticMethod();
console.log(car.noOfWheels);
console.log(Car.noOfWheels);