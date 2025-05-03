Array.prototype.forEach = function (cb) {

    for (let i = 0; i < this.length; i++)
        cb(this[i], i, this);
}

const arr = [1, 2, 3, 4, 5];
arr.forEach((item, index) => {
    console.log(`Item: ${item}, Index: ${index}`);
});