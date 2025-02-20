Array.prototype.myFilter = function (callback, thisArg) {

    let result = [];
    let arr = thisArg || this;
    for (let i = 0; i < this.length; i++) {
        if (callback(arr[i])) {
            result.push(this[i]);
        }
    }
    return result;
}

const arr = [1, 2, 3, 4, 5];
const result = arr.myFilter((item) => item % 2 == 0);
console.log(result);