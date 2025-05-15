const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Miachel', 'Peter', 'Steven']
}

// console.log(jonas);
console.log(jonas.firstName);
console.log(jonas['firstName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);