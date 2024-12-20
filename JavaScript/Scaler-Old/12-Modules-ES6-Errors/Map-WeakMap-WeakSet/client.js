const { process, cache } = require('./05-weak-map.js');

let obj1 = {
    task1res: "Hello"
};
let obj2 = {
    task2res: "Bye"
};

let res1 = process(obj1);
console.log("Result 1:",res1);

let res2 = process(obj2);
console.log("Result 2:",res2);

let res3 = process(obj1);
console.log("Result 3:",res3);

obj1 = null;

let res4 = process(obj2);
console.log("Result 4:",res4);

console.log(cache.get(obj1));
console.log(cache.get(obj2));