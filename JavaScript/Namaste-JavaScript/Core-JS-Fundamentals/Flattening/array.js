function flattenArray(arr) {

    const res = [];

    for (let val of arr) {

        if (typeof val == 'object')
            res.push(...flattenArray(val));

        else
            res.push(val);
    }

    return res;
}

const arr = [1, 2, [3, 4, [5, [6, [7]]]], 8, 9, 10];
const flattenedArray = flattenArray(arr);
console.log(flattenedArray);