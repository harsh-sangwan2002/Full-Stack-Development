function flattenArray(arr) {

    let flattenedArray = [];

    for (let i = 0; i < arr.length; i++) {

        if (typeof arr[i] == 'object')
            flattenedArray.push(...flattenArray(arr[i]));

        else
            flattenedArray.push(arr[i]);
    }

    return flattenedArray;
}

const arr = [1, 2, [3, 4, [5, 6, [7]]], 8, 9];
const flattenedArray = flattenArray(arr);
console.log(flattenedArray);