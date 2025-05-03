/******************** Question: 1 ***********************/
// let john = {};
// john.age = 25;
// console.log("John 5", john);
// john = null;
// console.log("John 7", john);

/******************** Question: 2 ***********************/

// let john = {};
// john.age = 25;
// let arr = [john];

// console.log("John 13", john);
// // arr[0]=null;
// john = null;
// console.log("John 15", john);
// console.log("John 17", arr[0]);

/****
 * Garage collection : when an unused type  -> object ,value etc -> they are not in use then 
 * JS's Garbage collector removes it from the memory and frees up the memory for further usage
 * 
 * Ques - How do you define whether a type is unused -> 
 * Mark and sweep algorithm -> identified unused types and then remove them  -> if a type is not 
 * refering to any other type/var/ array
 * **/

/************************ Map and strong refrences ******************/

// let john = { name: "John" };

// let map = new Map();
// map.set(john, "hi");

// let john1 = john;
// john = null;

// console.log("john1: ", john1);
// console.log("in map", map);
// console.log("48", map.get(john1));

/***** WeakMap : In weakMap you cannot have primitives a key
 * weakMap.set(key, value)
 * weakMap.get(key)
 * weakMap.delete(key)
 * weakMap.has(key)
 * */

let john = { name: "John" };
let john2 = { name: "steve" };

let weakMap = new WeakMap();

weakMap.set(john, "hi");
weakMap.set(john2, "Bi");

john = null;

console.log("in map" + weakMap.size);
console.log("48", weakMap.get(john));
console.log("48", weakMap.get(john2));
console.log(weakMap);