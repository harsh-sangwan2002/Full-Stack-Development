const users = [
    { firstName: 'John', lastName: 'Doe', age: 25 },
    { firstName: 'Jane', lastName: 'Smith', age: 20 },
    { firstName: 'Jim', lastName: 'Brown', age: 25 },
    { firstName: 'Jake', lastName: 'White', age: 28 },
    { firstName: 'Jill', lastName: 'Black', age: 20 },
]

// Q-1: List of full names
const fullNames = users.map(user => user.firstName + ' ' + user.lastName);
console.log(fullNames);

// Q-2: {20:2, 25:2, 28:1}
const values = users.reduce((acc, user) => {

    if (acc[user.age])
        acc[user.age]++;

    else
        acc[user.age] = 1;

    return acc;
}, {})
console.log(values);

// Q:3 - Find names of users whose age is less than 30
const names = users.filter(user => user.age < 30).map(user => user.firstName);
console.log(names);