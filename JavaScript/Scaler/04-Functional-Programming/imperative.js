// We are given a array of raduis of circles and we need to calculate the area & circumference of the circles.
let myRadiusArray = [2, 3, 4, 5, 8];

function calculateArea() {

    let areaArray = [];

    for (let i = 0; i < myRadiusArray.length; i++)
        areaArray.push(Math.PI * myRadiusArray[i] * myRadiusArray[i]);

    return areaArray;
}

function calculateCircumference() {

    let circumferenceArray = [];

    for (let i = 0; i < myRadiusArray.length; i++)
        circumferenceArray.push(2 * Math.PI * myRadiusArray[i]);

    return circumferenceArray;
}

console.log(calculateArea());
console.log(calculateCircumference());