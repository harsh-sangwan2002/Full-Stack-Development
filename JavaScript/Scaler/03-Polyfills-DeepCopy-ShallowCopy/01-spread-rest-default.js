/************************* Default Parameter *************************/
function fn(param1, param2, param3 = "defaultValue"){
    console.log(param1,param2,param3);
}

fn("Hi","Hello","Hola");
fn("Hi","Hello");

/************************* Shallow Copy **************************/

// let arr = [1,2,3,4,5];
// let arr2 = arr;

// arr2.push(100);
// arr[2] = 300;
// console.log("Actual array: ", arr);
// console.log("Modified array: ", arr2);

/************************* Shallow Copy
 * Spread Operator: Copies values and ref's from one array to another only upto first level 
 * *************************/
let arr = [1,2,[3,4],5,6];
let arr2 = [...arr];

arr2.pop();
arr2.push(100);
arr2[2][2] = 500;
console.log("Actual array: ",arr);
console.log("Modified array: ",arr2);

// Statement 3:
let a = 10;
let b = a;
// copied value -> primitive type
console.log("Value of a: ",a," Value of b: ",b);
b = 20;
console.log("Value of a: ",a," Value of b: ",b);

/*********************** Rest Parameter:
 * It is used to collect the remaining parameters of a function ***********************/
function fn(param1,...param2){
    console.log("Params are: ",param1);
    console.log("Other params are: ",param2);
}
fn("Hi","Hello","Hola","Mahesh","Sanket");