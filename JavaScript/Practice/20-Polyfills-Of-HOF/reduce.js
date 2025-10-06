Array.prototype.reduce = function (cb, acc = 0) {

    let startIdx = 0, res = 0;

    if (!acc)
        startIdx = 0;

    else
        startIdx = 1;


    for (let i = startIdx; i < this.length; i++)
        res = cb(res, this[i], i, this);

    return res;
}

const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, item) => {
    return acc + item;
}, 0);
console.log(sum);