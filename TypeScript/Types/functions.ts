function square(num: number): number{
    return num*num;
}

function greet(person: string): string{
    return `Hi there! ${person}`
}

const doSomething = (person:string, age:number, isFunny:boolean): undefined => {
    console.log(`Hello ${person} you are ${age} years old and you are funny: ${isFunny}`)
}

function greet2(person: string = "stranger"): string{
    return `Hi there! ${person}`
}

let squareOfTwo = square(2);
console.log(squareOfTwo); // 4

let squareOfThree = square(3);
console.log(squareOfThree); // 9

console.log(greet("Harsh Sangwan"))
console.log(greet("Colt Stele"))

const colors = ["red","orange","blue","green"];
colors.map(function(color: string): string{
    return color.toUpperCase();
})