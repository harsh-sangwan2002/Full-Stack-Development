function square(num: number): number{
    return num * num;
}
console.log(square(5));
console.log(square(10));

function greet(name: string = "Stranger"):string{
    return `Hello, ${name}`;
}
console.log(greet("Alice"));
console.log(greet("Bob"));

const doSomething = (person:string, age:number, isFunny:boolean)=>{}
doSomething("Alice", 25, true);

const colors = ["red", "green", "blue"];
colors.map(color=>color.toUpperCase());

function printTwice(msg:string): void{
    console.log(msg);
    console.log(msg);
    return undefined;
}

const neverStop = ():never=>{
    while(true){
        console.log("I will never stop!");
    }
}

const giveError = ():never=>{   
    throw new Error("This is an error!");
}