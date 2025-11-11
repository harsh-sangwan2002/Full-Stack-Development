/************** Object , Map -> store data in key, value pair  ***********/
const print = console.log;
// a. object
let cap = {
    name: "Steve",
    occupation: "Software Engineer",
    age: 21,
}
cap.newProp = "Hello";
delete cap.name;

// console.log(cap);

let arrKeys = Object.keys(cap);
// console.log(arrKeys);

// b. map
const personMap = new Map();

personMap.set('name', 'Jasbir');
personMap.set('age', 35);
personMap.set('occupation', "Software Engineer");

personMap.delete('name');

// print(personMap);
// print(personMap.has('age'));
// print(personMap.size);

/************* Differences
 * 1. iteration
 *  Iterate over a map ->
 *          all the HOF ,
 *          for of loop,
 *          for in loop does not work
 * Can't iterate over an object ->
 *          HoF not applicable,
 *          for of loop not work,
 *          for in loop work
 *  ***************/


// It will work
// for(let [key,val] of personMap){
//     print(key,val);
// }

// personMap.forEach((val,key)=>{
//     print(key,val);
// });

// It will not work
// for(let key of cap){
//     print(key);
// }

// It will not work
// for(let key in personMap){
//     print(key);
// }

// It will work
// for(let key in cap){
//     print(key);
// } 

/******
 * Map -> keys can be of any type
 * Obj -> String , Number , Symbols
 * Usecase : when you want to store properties with a key that has some metadata
 * ***/

// //  user -> multiple entries
const user1 = { id: 1, name: 'Alice' };
const user2 = { id: 2, name: 'Bob' };
const user3 = { id: 3, name: 'Charlie' };

// //  extended data 
let preferenecsObj1 = { theme: 'dark', language: 'en' }
let preferenecsObj2 = { theme: 'light', language: 'fr' }
let preferenecsObj3 = { theme: 'dark', language: 'de' }

let preferenceMap = new Map();

preferenceMap.set(user1, preferenecsObj1);
preferenceMap.set(user2, preferenecsObj2);
preferenceMap.set(user3, preferenecsObj3);

// console.log(preferenceMap);
// console.log("first Users name", user1.name);
// console.log("first users preference", preferenceMap.get(user1));

/******************object format of implementaion************************/
// const user1 = {
//     id: 1, name: 'Alice',
//     pereferences: { theme: 'dark', language: 'en' }
// };
// const user2 = {
//     id: 2, name: 'Bob',
//     pereferences: { theme: 'light', language: 'fr' }
// };
// const user3 = {
//     id: 3, name: 'Charlie',
//     pereferences: { theme: 'dark', language: 'de' }
// };

// console.log("first Users name", user1.name);
// console.log("first users preference", user1.pereferences);

//  2. when you have lot update / delete -> amount of data set -> Map

// print(cap);
// print(personMap);

// print("````````````````");
let strMap = JSON.stringify(personMap);
console.log("strMap: ", strMap);
// print("````````````````");
let strObj = JSON.stringify(cap);
// print("strObj: ", strObj);