function multiply(x, y) {
    console.log(x * y);
}

const multiplyBy2 = multiply.bind(this, 2);
multiplyBy2(5);

const multiplyBy3 = multiply.bind(this, 3);
multiplyBy3(5);