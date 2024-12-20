/***
 * Weakset :  it also takes only object as keys
 * add 
 * delete
 * has
 * **/

let visitedSet = new WeakSet();
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john);
visitedSet.add(pete);
visitedSet.add(mary);
visitedSet.add(john);

pete = null;
console.log(visitedSet.has(pete));
console.log(visitedSet.has(john));

visitedSet.delete(mary);
