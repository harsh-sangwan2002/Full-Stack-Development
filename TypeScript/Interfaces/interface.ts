interface Point{
    x:number,
    y:number,
}

const pt:Point = {x:12,y:123};

interface Person{
    readonly id:number
    first:string,
    last:string,
    nickname?:string,
    sayHi:()=>string
}

const thomas:Person = {first:"Thomas",last:"Hardy", nickname:"Tom", id:123456, sayHi:()=>{return "Hi"}};

interface Product{
    name:string,
    price:number,
    applyDiscount(discount:number):number
}

const shoes : Product = {
    name:"Nike Airfly",
    price:100,
    applyDiscount(discount:number){
        return this.price - discount;
    }
}

interface Dog{
    name:string,
    age:number
}

interface Dog{
    breed:string,
    bark():string
}

const elton:Dog={
    name:"Elton",
    age:3,
    breed:"Golden Retriever",
    bark(){
        return "Woof!";
    }
}

interface ServiceDog extends Dog{
    job:"drug sniffer"|"seeing eye"|"therapy"
}

const buddy:ServiceDog = {
    name:"Buddy",
    age:5,
    breed:"Labrador",
    job:"seeing eye",
    bark(){
        return "Woof!";
    }
}

interface Person2{
    name:string,
}

interface Employee{
    readonly id:number,
    email:string,
}

interface Engineer extends Person2,Employee{
    level:string,
    skills:string[]
}

const john:Engineer = {
    name:"John",
    id:123456,
    email:"abc@gmail.com",
    level:"Senior",
    skills:["React","Node"]
}