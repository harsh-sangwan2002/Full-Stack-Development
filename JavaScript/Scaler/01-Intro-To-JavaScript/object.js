// Keys will be converted to string
let obj = {
    0: "0",
    "0": "zero",
}
console.log(obj);

let obj1 = {
    "0": "zero",
    0: "0"
}
console.log(obj1);

obj = {
    name: "Harsh",
    age: 22,
    isStudent: true,
}

obj[2] = false;
console.log(obj, typeof obj);
console.log(obj instanceof Object);