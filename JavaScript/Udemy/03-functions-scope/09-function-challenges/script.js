const getCelcius = (temp) => {
    const celcius = ((temp - 32) * 5) / 9;
    return Math.round(celcius);
}
console.log(getCelcius(34));

function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {
        min, max,
    }
}
console.log(minMax([1, 2, 3, 3, 4]));

((length, width) => {
    const area = length * width;
    console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`)
})(10, 5)