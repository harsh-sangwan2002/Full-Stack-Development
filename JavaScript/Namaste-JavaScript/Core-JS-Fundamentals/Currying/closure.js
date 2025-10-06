function multiply(x) {
    return function (y) {
        console.log(x * y);
    }
}

const multiplyBy2 = multiply(2);
multiplyBy2(5);

const multiplyBy3 = multiply(3);
multiplyBy3(5);