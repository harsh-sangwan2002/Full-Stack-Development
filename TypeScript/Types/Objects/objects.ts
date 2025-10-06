function printName(person:{first: string, last:string}):void{
    console.log(`${person.first} ${person.last}`);
}
printName({first: "John", last: "Doe"});

type Point = {
    x:number,
    y:number,
    z?:number,
}

let coordinates:Point = {
    x:10,
    y:20,
}
function randomCoordinates():Point{
    return {
        x: Math.random(),
        y: Math.random(),
    }
}

// Excess proprties
const singer = {first:"Lana", last:"Del Rey", age:475};
printName(singer);

type Song = {
    title:string,
    artist:string,
    numStreams:number,
    credits:{
        producer:string,
        writer:string,
    }
}
function calculatePayout(song:Song):number{
    return song.numStreams * 0.0033;
}
const mySong:Song = {
    title: "Born to Die",
    artist: "Lana Del Rey",
    numStreams: 1000000,
    credits: {
        producer: "Rick Nowels",
        writer: "Lana Del Rey",
    }
}
console.log(calculatePayout(mySong));

type User = {
    readonly id: number,
    username:string,
}
const user:User = {
    id:112,
    username:"LanaDelRey",
}
// user.id = 123; // Error: Cannot assign to 'id' because it is a read-only property.
user.username = "Lana";

type Circle = {
    radius: number,
}
type Colorful = {
    color:string,
}
type ColorfulCircle = Circle & Colorful;
const happyFace:ColorfulCircle = {
    radius: 4,
    color: "yellow",
}