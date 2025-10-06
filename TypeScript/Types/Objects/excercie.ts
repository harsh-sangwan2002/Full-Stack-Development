type Movie = {
    readonly title:string,
    originalTitle?:string,
    director:string,
    releaseYear:number,
    boxOffice:{
        budget:number,
        grossUs:number,
        grossWorldwide:number,
    }
}

const dune : Movie = {
    title: "Dune",
    originalTitle: "Dune: Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUs: 108327000,
        grossWorldwide: 402500000,  
    }
}

const cat : Movie = {
    title: "Dune",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUs: 108327000,
        grossWorldwide: 402500000,  
    }
}

function getProfit({boxOffice:{grossWorldwide,budget}}):number{
    return grossWorldwide - budget;
}
console.log(getProfit(dune));