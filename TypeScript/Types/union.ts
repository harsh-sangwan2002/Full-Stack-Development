let age:number|string = 21;
age = 'twenty one';

type Point = {
    x:number,
    y:number,
}

type Loc = {
    lat:number,
    loc:number
}

const coordinates: Point | Loc = {
    x: 10,
    y: 20,
}

function printAge(age:number|string): void{
    console.log(`You are ${age} years old.`);
}

printAge(21);
printAge('21');

function calculateTaxPrice(price:number|string, tax:number): number{
    if(typeof price === 'string'){
        price = parseFloat(price);
    }

    return price * tax;
}

calculateTaxPrice(100, 0.1);
calculateTaxPrice('100', 0.1);

const stuff: (number|string)[] = [1,2,3,'four', 'five', 6];

let zero : 0 = 0
let hi:"hi" = "hi"

let mood : "happy" | "sad" = "happy"
mood = "sad"

type DayOfWeek = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun"
let day: DayOfWeek = "Mon"
day = "Tue"