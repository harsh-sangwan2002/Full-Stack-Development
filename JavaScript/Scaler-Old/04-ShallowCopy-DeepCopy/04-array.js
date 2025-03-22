let arr = [1,2,3,4,5,6,7,8];

/************************** Slice **************************/
// startIdx, lastIdx-1
// TC:O(n), SC:O(n)
// Doesn't modifies tha original array
let slicedArr = arr.slice(2,5);
console.log(arr);
console.log(slicedArr);

/************************** Splice **************************/
// startIdx, no. of elements
// TC:O(n), SC:O(n)
// Modifies the original array
let splicedArr = arr.splice(3,4);
console.log(arr);
console.log(slicedArr);

/************************** Concat **************************/
let concatArr = arr.concat([10,20,30,40]);
console.log(arr);
console.log(concatArr);

/************************** Split & Join **************************/
let str = "Hi, I am Harsh";
let arrStr = str.split(" ");
console.log(arrStr);

let joinedArr = arrStr.join(" ");
console.log(joinedArr);

/************************** Trim **************************/
str = "    asjdkhjkbd ";
console.log(str);
str = str.trim();
console.log(str);