Array.prototype.myReduce = function (callback, initialValue) {

    let total = initialValue || arr[0], arr = this;

    for (let i = initialValue ? 0 : 1; i < arr.length; i++)
        total = callback(total, arr[i], i, arr);

    return total;
}

const arr = [1, 2, 3, 4, 5];
const sum = (a, b) => a + b;
const res = arr.myReduce(sum, 0);
console.log(res);