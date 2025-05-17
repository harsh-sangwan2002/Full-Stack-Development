// HOF - A function that takes a function as an argument or returns a function as a result
const radius = [3, 1, 2, 4, 5];

const calculate = (radius, logic) => {
    const result = [];
    for (let i = 0; i < radius.length; i++) {
        result.push(logic(radius[i]));
    }
    return result;
}

const area = (r) => Math.trunc(Math.PI * r * r);
const circumference = (r) => Math.trunc(2 * Math.PI * r);
const diameter = (r) => 2 * r;

const areas = calculate(radius, area);
const circumferences = calculate(radius, circumference);
const diameters = calculate(radius, diameter);

console.log(areas);
console.log(circumferences);
console.log(diameters);