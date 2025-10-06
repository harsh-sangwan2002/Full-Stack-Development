// A piece of code that we can reuse and call it again and again.
function logger() {
    console.log("I am logger function")
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const orangeJuice = fruitProcessor(0, 5);
console.log(orangeJuice);

const appleOrangeJuice = fruitProcessor(4, 2);
console.log(appleOrangeJuice);