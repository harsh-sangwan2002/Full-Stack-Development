// Imperative programming example

let radiusArr = [1, 2, 3, 4, 5];

function calculateArea() {

    let areaArr = [];

    for (let i = 0; i < radiusArr.length; i++) {
        areaArr.push(Math.PI * radiusArr[i] * radiusArr[i]);
    }

    return areaArr;
}

function calculateCircumference() {

    let circumferenceArr = [];

    for (let i = 0; i < radiusArr.length; i++) {
        circumferenceArr.push(2 * Math.PI * radiusArr[i]);
    }

    return circumferenceArr;
}

let areaArr = calculateArea();
let circumferenceArr = calculateCircumference();

console.log("Area: ", areaArr);
console.log("Circumference: ", circumferenceArr);