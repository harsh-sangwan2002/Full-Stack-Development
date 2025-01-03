const transactions = [1000, 2000, 3000, 4000, 5000, 6000, 7000];
const inrToUsd = 80;

const conversionToDollars = () => transactions.map((transaction) => Math.round(transaction / inrToUsd, 2));

console.log(conversionToDollars());