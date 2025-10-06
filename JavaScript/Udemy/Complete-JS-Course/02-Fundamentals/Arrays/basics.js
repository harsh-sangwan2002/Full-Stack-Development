const friend1 = "Miachel";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ['Miachel', 'Steven', 'Peter'];
const years = new Array(1991, 1984, 2008, 2020);

console.log(friends);
console.log(years);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends.length);

// Deleting an array
friends.length = 0;
console.log(friends);

// Exercise - 1
const calcAge = birthYear => 2037 - birthYear;
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);

console.log(age1, age2, age3);