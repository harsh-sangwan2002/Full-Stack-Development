// type Point = {
//     x:number,
//     y:number
// }
// const pt:Point = {
//     x:1,
//     y:2
// }

interface Point{
    x:number,
    y:number
}
const pt : Point = {x:1, y:2}

// interface Person{
//     readonly id:number,
//     first:string,
//     last:string,
//     nickname?:string,
//     sayHi: ()=>string
// }
// const thomas:Person = {
//     id:1,
//     first:'Thomas',
//     last:'Anderson',
//     nickname:'Neo',
//     sayHi : ()=> "Hello, I'm Neo"
// }
// thomas.first = 'Tom'
// thomas.id = 2 // error

interface Product{
    name:string,
    price:number,
    applyDiscount(discount:number):number
}
const shoes:Product = {
    name:'Running Shoes',
    price:100,
    applyDiscount(discount:number){
        return this.price - discount
    }
}

interface Dog{
    name:string,
    age:number,
}
interface Dog{
    breed:string,
    bark:()=>string
}

interface ServiceDog extends Dog{
    job:string,
}

const elton : Dog = {
    name:'Elton',
    age:2,
    breed:'Labrador',
    bark:()=> 'Woof!'
}

const serviceDog : ServiceDog = {
    name:'Buddy',
    age:3,
    breed:'Golden Retriever',
    job:'Guide Dog',
    bark:()=> 'Woof!'
}

interface Person{
    name:string,
}
interface Employee{
    readonly id : number,
    email : string,
}
interface Engineer extends Person, Employee{
    level:string,
    languages:string[],
}
const engineer : Engineer = {
    name:'Alice',
    id:1,
    email:'abc@gmail.com',
    level:'Senior',
    languages:['JavaScript', 'TypeScript']
}