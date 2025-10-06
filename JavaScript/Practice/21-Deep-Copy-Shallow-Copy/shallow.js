const obj1 = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        zip: "10001"
    },
}

// 1. Shallow copy
const obj2 = obj1;
console.log(obj2);

// 2. Spread operator
const obj3 = { ...obj1, address: { ...obj1.address } }
console.log(obj3);

// 3. Object.assign
const obj4 = Object.assign({}, obj1)
console.log(obj4);