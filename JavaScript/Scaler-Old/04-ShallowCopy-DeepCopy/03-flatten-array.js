let arr = [1, 2, [3, 4], [5, [7, 8]], 9, 10];

function flattenArray(arr) {

    if (arr === null || typeof arr !== 'object')
        return arr;

    let res = [];

    for (let val of arr) {

        if (Array.isArray(val)) {
            res.push(...flattenArray(val));
        }

        else
            res.push(val);
    }

    return res;
}

let arr2 = flattenArray(arr);
arr2[2][0] = 300;
arr[3][1][0] = 700;

console.log(arr);
console.log(arr2);