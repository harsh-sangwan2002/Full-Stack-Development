// Functional programming example

let radiusArr = [1, 2, 3, 4, 5];

const calculateArea = () => radiusArr.map(radius => Math.PI * radius * radius);
const calculateCircumference = () => radiusArr.map(radius => 2 * Math.PI * radius);

let areaArr = calculateArea();
let circumferenceArr = calculateCircumference();

console.log("Area: ", areaArr);
console.log("Circumference: ", circumferenceArr);