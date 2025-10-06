let arr = [1, 2, 3, 4, 5];

// Not a good way to perform square and cube
// Square
// for (let i = 0; i < arr.length; i++)
//     arr[i] = arr[i] * arr[i];

// // Cube
// for (let i = 0; i < arr.length; i++)
//     arr[i] = arr[i] * arr[i] * arr[i];

function transform(arr, cb) {

    let res = [];
    arr.forEach(val => res.push(cb(val)));

    return res;
}
function square(ele) {
    return ele * ele;
}
function cube(ele) {
    return ele * ele * ele;
}

let squaredArr = transform(arr, square);
let cubedArr = transform(arr, cube);

console.log(squaredArr);
console.log(cubedArr);

/************** HOF  -> are the function that accepts a fn as a parameter or returns a function
 * Callbacks -> function that are passed as a paramtere to a nother are known as cb fns. 
 * They usually be called by HOFs. 
 ********************/

/******************** HOF -> majorly available on arrays
 * These fn doesn't change the source array 
 * *****************/

/********************** map -> Change every element according to the cb passed ***********************/
/********************** Polyfill of map ***********************/
Array.prototype.myMap = function (cb) {

    let res = [];

    this.forEach(ele => res.push(cb(ele)));

    return res;
}

squaredArr = arr.myMap(square);
cubedArr = arr.myMap(cube);

console.log(squaredArr);
console.log(cubedArr);

/********************** filter -> Returns the filtered elements according to the cb passed ***********************/
/********************** Polyfill of filter ***********************/
Array.prototype.myFilter = function (cb) {

    let res = [];
    this.forEach(ele => {

        if (cb(ele))
            res.push(ele);
    })

    return res;
}

const isEven = (ele) => ele % 2 === 0;
const isOdd = (ele) => ele % 2 !== 0;

console.log(arr.myFilter(isEven));
console.log(arr.myFilter(isOdd));

/********************** reduce -> Returns the filtered elements according to the cb passed ***********************/
/********************** Polyfill of reduce ***********************/
Array.prototype.myReduce = function (cb, acc) {

    this.forEach(ele => acc = cb(ele, acc));
    return acc;
}
function Sum(a, b) {
    return a + b;
}
function Product(a,b){
    return a*b;
}

console.log(arr.myReduce(Sum, 0));
console.log(arr.myReduce(Product,1));