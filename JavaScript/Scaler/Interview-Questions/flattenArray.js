function flattenArray(arr, level) {

    let res = [];

    for (let val of arr) {

        if (val instanceof Array && level != 1)
            res.push(...flattenArray(val, level - 1));

        else
            res.push(val);
    }

    return res;
}

let arr = [1, 2, [3, [4, [5], 6], 7], 8, 9];
console.log(flattenArray(arr, 2));