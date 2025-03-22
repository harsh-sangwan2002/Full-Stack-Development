const numbers = [1, 2, 3, 4, 5, 6];

const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);

// Same with forEach
let doubledNumbers2 = [];
numbers.forEach(number => doubledNumbers2.push(number));

console.log(doubledNumbers2);

const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// Create an array of company names
const companyNames = companies.map(company => company.name);
console.log(companyNames);

// Create an array with just company & category
const comanyInfo = companies.map(company => ({
    name: company.name,
    category: company.category,
}))
console.log(comanyInfo);

// Create an array with length of each company in years
const companyLength = companies.map(company => ({
    name: company.name,
    years: company.end - company.start
}));
console.log(companyLength);

// Chain map methods
const squareAndDouble = numbers
    .map(number => Math.sqrt(number))
    .map(sqrt => sqrt * 2);
console.log(squareAndDouble);

// Chaining different methods
const evenDouble = numbers
.filter(num=>num%2===0)
.map(num=>num*2);
console.log(evenDouble);