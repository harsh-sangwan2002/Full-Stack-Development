Array.prototype.myforEach = function (callBack, thisArg) {

    // Step-1: Iterate through all elements of the array
    // Step-2: Call the callBack function for each element of the array
    let arr = thisArg || this;
    for (let i = 0; i < this.length; i++)
        callBack(arr[i], i, arr);
}

let arr = [1, 2, 3, 4]
arr.myforEach(ele => {
    console.log(ele)
})