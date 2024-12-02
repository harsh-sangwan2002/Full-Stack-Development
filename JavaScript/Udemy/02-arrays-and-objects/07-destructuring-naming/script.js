const firstName = "Steve";
const lastName = "Rogers";
const age = 26;

const person = {
    firstName,
    lastName,
    age
}

console.log(person.firstName);

// Destructuring objects
const todo = {
    id:1,
    title:'Take trash out',
    user:{
        name:"John"
    }
}

const {id:todoId,title,user:{name}} = todo;

console.log(todoId,title,name);

// Destructuring arrays
const numbers = [23,67,55,45];
const [a,b,...rest] = numbers;

console.log(a,b,rest);