Array.prototype.map = function (cb) {

    const res = [];

    for (let i = 0; i < this.length; i++)
        res.push(cb(this[i], i, this));

    return res;
}

const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((item, index) => {
    return item * 2;
});
console.log(newArr);