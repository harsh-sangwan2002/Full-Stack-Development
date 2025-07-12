// Inheritance : High Level Intro
// 1. Inheritance is related to OOPS. All OOPS languages are Java-based.
// 2. Because we need a class to create an object just like for creating a house we need the architecture of the house.
// 3. Suppose we have architecture having 1 door and 2 rooms. Now we want to create a new house with this architecture along with it we also want a swimming pool.
// 4. So we will inherit all the properties of the old architecture and add a swimming pool to it.
// 5. Then we will create a house with that new architecture.

/************************ Statement-1 ************************/
let arr = [1, 2, 3, 4, 5];

console.log(arr);
arr.push("hello");
console.log(arr);

// myArr -> [p]Array -> [p]Object -> [p]null
console.log(arr.toString());

// Advantages of inheritance ->
// 1. Resuse of code
// 2. Saving memory space

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4, 5, 6, 7];

/************************ Bad way of giving a feature ************************/
// arr1.sum = function(){

//     let sum = 0;

//     this.forEach(val=>sum+=val);
//     return sum;
// }
// arr2.sum = function(){

//     let sum = 0;

//     this.forEach(val=>sum+=val);
//     return sum;
// }
// console.log(arr1.sum());
// console.log(arr2.sum());

/************************ Parent(Prototype) ************************/
Array.prototype.sum = function () {

    let sum = 0;

    this.forEach(val => sum += val);
    return sum;
}
console.log(arr1.sum());
console.log(arr2.sum());