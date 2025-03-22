/******************* Ways to create object in js
 * 1. object literal
 * 2. Object.create 
*********************/

/********************* 1. Object literal ****************
 * 1. properties and methods
 * 2. Object -> as your prototype (parent)
*******************/
let obj = {
    name: "Steve",
    address: {
        state: "Newyork",
        city: "Manhatten"
    },
    sayHi: function () {
        console.log(`${this.name} say's Hi`);
        console.log("object this: ", this);
        return this;
    }
};

console.log(obj);

/******************* 2.Object Constructor ********************/
// const obj1 = new Object();
// obj1.name = "Harsh";
// console.log(obj1);

/******************* 3.Object.create() ********************/
let obj2 = Object.create(obj);
console.log(obj2);

/** overriden the name prop*/
obj2.name = "Symphony";
obj2.lastname = "Rogers";
console.log("1. ", obj2.name, " ", obj2.lastname, " ", obj2.address);
console.log("2. ", obj.lastname);

console.log(obj.isPrototypeOf(obj2)); // true: is 'obj' parent of 'obj2'

let obj3 = Object.create(obj2);
obj3.friends = ["Tony", "Bruce"];
obj3.fullName = "Harsh Sangwan";
obj3.age = 26;
console.log(obj3);

console.log(obj.isPrototypeOf(obj3)); // true

// Loop iterates over all the keys
for (let key in obj3) {

    if (obj3.hasOwnProperty(key))
        console.log(key, obj3[key]);
}

// Different data-types and their parents
// console.log([1, 2, 3, 4]);
// console.log(obj.toString());

let str = "Hi, my name is Harsh";
// console.log(str);
// console.log(str.__proto__ === String.prototype);

// console.log(new String("Harsh"));
// console.log(new Boolean(2));
// console.log(new Number(2));

/********************* Inbuilt object works
 * 1.array -> Array -> Object -> null
 * 2.function -> Function -> Object -> null 
 * 3.object -> Object -> null 
 * 
 * For Primitive types: temporary parent
 * a.num -> Number -> Object -> null 
 * b.string -> String -> Object -> null
 * c.boolean -> Boolean -> Object -> null
 * d.null & undefined have no parent
**********/