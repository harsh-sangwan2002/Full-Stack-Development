// function add(a,b){
//     return a+b;
// }

// Arrow function syntax
const add = (a, b) => {
    return a + b;
}
console.log(add(10, 20));

// Implicit return
const subtract = (a, b) => a - b;
console.log(subtract(30, 20));

// Can leave off () if there is only one param
const double = a => a * 2;
console.log(double(10));

// Returning an object
const createObj = () => ({
    name: "Steve",
})
console.log(createObj());

// Arrow function in a callBack
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(n => console.log(n));