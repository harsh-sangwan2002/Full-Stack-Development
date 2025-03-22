// We are given a array of raduis of circles and we need to calculate the area & circumference of the circles.

// 1. arr.forEach(callback)
let arr = [1, 2, 3, 4];

// Iterate through all the items of the array
arr.forEach((item, idx) => {
    // console.log(item, idx)
})

let myRadiusArray = [2, 3, 4, 5, 8];

function calculateArea() {

    let areaArray = [];

    myRadiusArray.forEach(function () {
        areaArray.push(Math.PI * Math.pow(myRadiusArray[i], 2));
    })

    return areaArray;
}

function calculateCircumference() {

    let circumferenceArray = [];

    myRadiusArray.forEach(function () {
        circumferenceArray.push(2 * Math.PI * myRadiusArray[i]);
    })

    return circumferenceArray;
}

// console.log(calculateArea());
// console.log(calculateCircumference());

// 2. arr.map(callback)

// Iterate through all the items of the array and return a new array
// Returns the new array of same length
const newArr2 = arr.map((item, idx) => {
    return item * 2;
})

// console.log(newArr2);

const calculateArea = () => myRadiusArray.map((radius, idx) => Math.PI * radius * radius)


const calculateCircumference = () => myRadiusArray.map((radius, idx) => 2 * Math.PI * radius);


console.log(calculateArea());
console.log(calculateCircumference());