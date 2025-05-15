for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repition ${rep}`);
}

const jonas = [
    'Jonas',
    'Shcemdtmann',
    2037 - 1991,
    'teacher',
    ['Miachel', 'Steve', 'Peter'],
    true
]
const types = [];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);
    types[i] = typeof jonas[i];
}

console.log(types);