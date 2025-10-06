// let arr = [1, 2, 3, 4, [10, 12], 5, 6];
// [val, val, val, val, ref, val, val]

// // assigning arr to copiedArr
// let copiedArr = arr;
// // console.log(copiedArr);
// copiedArr[2] = 100;
// console.log("arr: ", arr, "copiedArr: ", copiedArr);

/***
 * array, object -> two types of values -> primitves(values) , non primitives(reference)
 * Assignment ->
 * values ->  are not copied, only main address copied.
 * reference -> they are also not copied, only main address copied.
* */

/*****
 * shallow copy: shallow copy of an object/Array is a copy whose properties share the same references
 * (point to the same underlying values) as those of the source object from which copied
 * object is formed
 * shallow copy :
 *  value -> values will be copied and they have diff memory
 * references -> new references will be created but the values inside the reference will be pointing towards same location
 * */

/**************************** Shallow Copy ****************************/
// 1. Spread Operator 

// let arr = [1,2,3,[4,5],6,7];
// let arr2 = [...arr];

// arr2[2] = 30;
// arr2[3][0] = 40;

// console.log(arr);
// console.log(arr2);

// 2. Object.assign
let person = {
    name:"Steve",
    lastName:"Rogers",
    address:{
        city:"Manhatten",
        state:"New York",
        country:"USA"
    }
}

let person2 = person;
let person3 = Object.assign({},person);
person2.lastName = "Parker";
person2.address.city = "Los Angeles";
person3.lastName = "Smith";
person3.address.city = "London";

console.log(person);
console.log(person2);
console.log(person3);

/**************************** Deep Copy-> JSON.stringify & JSON.prase ****************************/

// Convert obj to string
let stringObj = JSON.stringify(person);
console.log(stringObj,typeof stringObj);

// Convert string to object
let deepClonedObj = JSON.parse(stringObj);
console.log(deepClonedObj,typeof deepClonedObj); 

deepClonedObj.lastName = "Vipin";
deepClonedObj.address.country = "India";
console.log(deepClonedObj);
console.log(person);

/************************** Array **************************/
let arr = [1,2,3,4,[5,6],7];
let stringArr = JSON.stringify(arr);
let objArr = JSON.parse(stringArr);
objArr[4][0] = 500;

console.log(objArr);
console.log(arr);