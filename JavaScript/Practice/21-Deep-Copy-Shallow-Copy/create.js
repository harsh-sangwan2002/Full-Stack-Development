const obj1 = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        zip: "10001"
    },
}

const obj2 = Object.create(obj1);
obj2.address.city = "Los Angeles";

console.log(obj1);