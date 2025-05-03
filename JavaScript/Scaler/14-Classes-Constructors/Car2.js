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

let Car1 = new SuperCar('BMW', 'Black', 100000, 20000, 400);
console.log(Car1);
console.log(Car1.noOfWheels);
console.log(Car.noOfWheels);