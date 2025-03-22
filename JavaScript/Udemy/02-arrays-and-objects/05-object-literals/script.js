// A common data structure to hold {key:value} pair
let x;

const person = {
    name:"John Doe",
    age:30,
    isAdmin:true,
    address:{
        street:'123 Main st',
        city:"Boston",
        state:"MA",
    },
    hobbies:['sports','music']
}

x = person.age;
x = person.name;
x = person.address.state;
x = person.hobbies[1];

person.name = 'Jane Doe';
x = person.name;
x = person['name'];

delete person.name;

person.hasChildren = true;

person.greet = function(){
    console.log(`Hello my name is ${this.name}`);
}

const person2 = {
    'first name':'Bard',
    'last name':'Traversy'
}

console.log(x);
console.log(person2['first name']);
console.log(person2['last name']);