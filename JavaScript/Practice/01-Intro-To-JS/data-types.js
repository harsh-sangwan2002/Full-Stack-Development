// Variable naming conventions
// 1. Variables must begin with a letter, $, or _
// 2. Variables can contain letters, numbers, $, or _
// 3. Variables are case sensitive
// 4. Variables should be camelCase
// 5. Variables should be descriptive
// 6. Variables should not be reserved words

// Data types in JS -> Primitive Data Types & Reference Data Types
// Primitive Data Types -> Number, String, Boolean, Null, Undefined, Symbol
// Reference Data Types -> Object, Array, Function

// ----------------------------- Primitive Data Types -----------------------------

// 1.number
var data = 10;
console.log(data);
console.log(typeof data);

// 2. string
data = "Hello";
console.log(data);
console.log(typeof data);

// 3. boolean
data = true;
console.log(data);
console.log(typeof data);

// 4. null
data = null;
console.log(data);
console.log(typeof data);

// 5. undefined
var data2;
console.log(data2);
console.log(typeof data2);

// 6. symbol
data = Symbol("str");
console.log(data);
console.log(typeof data);

// 7. bigint
data = 10n;
console.log(data);
console.log(typeof data);

// ----------------------------- Reference Data Types -----------------------------

// 1. objects
var obj = {
    0: "0",
    "0": "zero",
}
console.log(obj);
console.log(typeof obj);

obj = {
    "0": "zero",
    0: "0",
}
console.log(obj);

// 2. functions
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(fullName("John", "Doe"));
console.log(typeof fullName);

// 3. arrays
var arr = [1, 2, 3, 4];
console.log(arr);
console.log(typeof arr);
console.log(arr instanceof Array);