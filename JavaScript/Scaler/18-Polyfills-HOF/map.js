Array.prototype.myMap = function (callback, thisArg) {
    
    let result = [];
    let arr = thisArg || this;
    for (let i = 0; i < this.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

const arr = [1, 2, 3, 4, 5];
const result = arr.myMap((item) => item * 2);
console.log(result);