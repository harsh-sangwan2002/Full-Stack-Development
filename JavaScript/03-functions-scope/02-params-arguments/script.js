// Default params
function registerUser(user = 'Bot') {

    return user + ' is registered.';
}
console.log(registerUser('John'));
console.log(registerUser());

// Rest params
function sum(...numbers) {

    let total = 0;

    for (let num of numbers)
        total += num;

    return total;
}
console.log(sum(1, 2, 3, 4));

// Object as params
function loginUser(user) {
    return `The user ${user.name} with id ${user.id} is logged in.`;
}
const obj = {
    id: 1,
    name: 'Steve',
}
console.log(loginUser(obj));
console.log(loginUser({
    id: 2,
    name: 'John',
}));

// Array as params
function getRandom(arr) {

    const randomIndex = Math.floor(Math.random() * arr.length);
    const val = arr[randomIndex];

    return val;
}
const arr = [10, 9, 8, 7, 6];
console.log(getRandom(arr));
console.log(getRandom([1, 2, 3, 4, 5, 6, 7]));