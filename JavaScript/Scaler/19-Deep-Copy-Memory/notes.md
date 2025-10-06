JavaScript: Memory Management, Shallow and Deep Copies
Agenda
The class covered the concepts of memory allocation in JavaScript data types, with a particular emphasis on the differences between primitive and reference data types, as well as the techniques for creating shallow and deep copies of objects.

Memory Management in JavaScript
Primitive Data Types
Primitive data types in JavaScript, such as numbers, strings, booleans, null, and undefined, are stored on the stack. When you declare a primitive data type, the variable stores the actual value, and each instance is independent. This means that modifying one variable does not affect another even if they initially contained the same value【4:13†source】【4:14†source】.

Reference Data Types
Reference data types, such as objects, arrays, and functions, are more complex. They are stored in the heap, with the variable holding a reference or pointer to the actual data. This means that if you copy an object and modify it, both instances (original and copied) will reflect the change unless explicitly copied【4:14†source】【4:15†source】.

Shallow Copy vs. Deep Copy
Shallow Copy
In JavaScript, a shallow copy of an object creates a new object with references to the same memory locations as the original object. Therefore, any changes in the properties of nested objects in the copy reflect in the original object too. Examples of creating shallow copies include using Object.assign() or the spread operator { ...object }【4:0†source】【4:6†source】.

Deep Copy
A deep copy, on the other hand, duplicates everything, including nested objects, ensuring entirely separate instances. Deep copying can be done using methods like JSON.parse() and JSON.stringify(). For more complex structures that include non-serializable data, a deep clone function using recursion and type checking is needed【4:0†source】【4:1†source】.

Code Examples
Shallow Copy Example
let original = { a: 1, b: { c: 2 } };
let shallowCopy = { ...original };
shallowCopy.b.c = 3;

console.log(original.b.c); // Outputs 3 because `b` is shared between `original` and `shallowCopy`.
Deep Copy Example
function deepClone(obj) {
if (obj === null || typeof obj !== 'object') return obj;
if (obj instanceof Array) {
let copy = [];
for (let i = 0; i < obj.length; i++) {
copy[i] = deepClone(obj[i]);
}
return copy;
}
if (obj instanceof Object) {
let copy = {};
for (let attr in obj) {
if (obj.hasOwnProperty(attr)) {
copy[attr] = deepClone(obj[attr]);
}
}
return copy;
}
}
let deepCopiedObj = deepClone(original);
deepCopiedObj.b.c = 4;

console.log(original.b.c); // Outputs 2 because `deepCopiedObj` is a completely new instance.
Summary
Understanding the difference between shallow and deep copies is essential when working with complex data structures in JavaScript, especially when attempting to maintain immutability or manage state effectively. It is critical to select the correct method for copying based on the specific requirements of your application【4:19†source】【4:18†source】.
