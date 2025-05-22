const ages : number[] = [12, 23, 34, 45, 56, 67, 78, 89, 90];
const gameBoard: string[][] = [[]];

type Product = {
    name: string,
    price: number,
}
const products: Product[] = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 },
];

function getTotal(products:Product[]):number{
    let total = 0;
    
    for(let product of products){
        total += product.price;
    }
    return total;
}