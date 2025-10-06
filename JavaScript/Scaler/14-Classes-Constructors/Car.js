// Variables can't be accessed outside the function
// function Car(model, color, price, tax) {

//     var model = model;
//     var color = color;
//     var price = price;
//     var tax = tax;

//     var finalPrice = function () {
//         return price + tax;
//     }
// }

// Constructor function
function Car(model, color, price, tax) {

    this.model = model;
    this.color = color;
    this.price = price;
    this.tax = tax;
}

Car.prototype.finalPrice = function () {
    return this.price + this.tax;
}

let Car1 = new Car('Toyota', 'White', 1000, 20);
let Car2 = new Car('Kia', 'Red', 2000, 30);

// function
// console.log(Car);

// object
// console.log(new Car());

console.log(Car1);
console.log(Car2.hasOwnProperty('finalPrice'));
// console.log(Car1.finalPrice());

// Class syntax
class CarClass {
    constructor(model, color, price, tax) {
        this.model = model;
        this.color = color;
        this.price = price;
        this.tax = tax;
    }

    finalPrice = function () {
        return this.price + this.tax;
    }

}

let Car3 = new CarClass('Toyota', 'White', 1000, 20);
let Car4 = new CarClass('Kia', 'Red', 2000, 30);
// console.log(CarClass);
console.log(Car3);
// console.log(Car4);