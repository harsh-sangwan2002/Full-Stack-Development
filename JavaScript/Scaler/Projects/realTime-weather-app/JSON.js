const obj = {
    name: "Steve",
    age: 30,
    city: "New York"
}

const users = [
    {
        name: "Jake",
        age: 30
    },

]

const stringifiedStr = JSON.stringify(obj);
const object = JSON.parse(stringifiedStr);

console.log(stringifiedStr);
console.log(object);

const stringifiedArray = JSON.stringify(users);
const objectArray = JSON.parse(stringifiedArray);

console.log(stringifiedArray);
console.log(objectArray);