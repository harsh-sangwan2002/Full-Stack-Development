const jessica = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
}

function marryPerson(originalPerson, newLastName) {
    originalPerson.lastName = newLastName;
    return originalPerson;
}

// Shallow copy
const marriedJessica = marryPerson(jessica, 'Davis');
marriedJessica.lastName = 'Davis'

console.log(marriedJessica);
console.log(jessica);

const jessica2 = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
    family: ['Alice', 'Bob'],
}

// Shallow copy
const jessicaCopy = { ...jessica2 };
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log(jessica2);
console.log(jessicaCopy);

// Deep Copy
const jessicaClone = structuredClone(jessica2);
jessicaClone.lastName = 'Amla';
jessicaClone.family.push('Peter');
console.log(jessica2);
console.log(jessicaClone);