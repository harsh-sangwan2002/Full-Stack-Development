// Ways to declare a variable
// var, let, const

let firstName = "John";
let lastName = "Doe";

console.log(firstName, lastName);

var age = 30;
console.log(age);
// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     lowercase

// Re-assigning variables
age = 31;
console.log(31);

let score;
score = 1;
console.log(score);

if (score) {
    score += 1;
}
console.log(score);

const x = 100;
// Uncaught TypeError: Assignment to constant variable.
// x = 200; 

// Uncaught SyntaxError: Missing initializer in const declaration
// const y; 

const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);

const person = {
    name: "Brad",
}
person.lastName = "Traversy";
console.log(person);

// Declare multiple variables at once
let a, b, c, d;
a = 10; b = 20; c = 30;

console.log(a,b,c,d);