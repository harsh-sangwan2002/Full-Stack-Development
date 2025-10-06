let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    },
    friends: ["Steve", "Nikola", "Ray", { name: "Jai", lastName: "Roy" }],
    sayHi: function () {
        console.log("Hi Class!");
    }
};

function effectiveClone(input) {

    if (input === null || typeof input !== 'object')
        return input;

    let clone = Array.isArray(input) ? [] : {};

    for (let key in input) {
        let val = input[key];
        clone[key] = effectiveClone(val);
    }

    return clone;
}

let person2 = effectiveClone(person);
person2.lastName = "Smith";
person2.address.country = "India";

console.log(person);
console.log(person2);