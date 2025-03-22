function findMaxValue(arr) {
    // Write your code here
    // return the result
    let max = -Number.MAX_SAFE_INTEGER;
    arr.forEach(val => {
        max = Math.max(val, max);
    })

    return max;
}