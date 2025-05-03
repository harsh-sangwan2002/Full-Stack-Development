function printName(person:{first:string, last:string}){

    console.log(`${person.first} ${person.last}`);
}

let person = {first: 'John', last: 'Doe'};
printName(person);

let coordinates:Point = {x:12,y:13};

function randomCoordinates(): Point{
    return {x:Math.random(), y:Math.random()};
}

type Point = {
    x:number,
    y:number,
    z?:number
}

type Song = {
    title:string,
    artist:string,
    numStreams:number,
    credits:{producer:string,writer:string}
}

function calculateStreams(song:Song):number{
    return song.numStreams*0.3333;
}

const myPoint : Point = {x:1,y:2,};

type User = {
    readonly id:number,
    username:string
}

const user:User = {id:1, username:'JohnDoe'};
// user.id = 2; // Error

type Circle = {
    radius:number,
}

type Colorful = {
    color:string
}

type ColorfulCircle = Circle & Colorful;

const happyFace : ColorfulCircle = {radius:42, color:'yellow'};