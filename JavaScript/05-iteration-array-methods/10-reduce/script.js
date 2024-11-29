const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (acc, ele) {
    return acc + ele
}, 0)
console.log(sum);

// Shorter version
const sum2 = numbers.reduce((acc, ele) => acc + ele, 0);
console.log(sum2);

// Using a for loop
const sum3 = () => {
    let acc = 0;

    for (const num of numbers)
        acc = acc + num;

    return acc;
}
console.log(sum3());

const cart = [
    { id: 1, name: 'Product 1', price: 130 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'Product 3', price: 200 },
]
// Get the total of these prices
const totalPrice = cart.reduce((acc,obj)=>acc+obj.price,0);
console.log(totalPrice);