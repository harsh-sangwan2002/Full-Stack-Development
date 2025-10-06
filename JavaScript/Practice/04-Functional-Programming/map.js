const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const InrToUsd = 80;

const usdTranscations = transactions.map(amount => amount / InrToUsd);
console.log(usdTranscations);