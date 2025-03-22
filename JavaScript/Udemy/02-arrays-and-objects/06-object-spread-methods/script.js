let x;

// Object literal
const todo = {};
todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

// Object Constructor
const obj = new Object();
obj.id = 2;
obj.name = 'Brad Traversy';
obj.completed = false;

const person = {
    address:{
        coords:{
            lat:42.392,
            lng:-71.889
        }
    }
}

x = person.address.coords.lat;

const obj1 = {a:1,b:2};
const obj2 = {c:3,d:4};

const obj3 = {...obj1,...obj2};
const obj4 = Object.assign({},obj1,obj2);

x = obj3;
x = obj4;

x = Object.keys(todo);

x = Object.values(todo);

x = Object.entries(todo);

x = todo.hasOwnProperty('completed');

console.log(x);