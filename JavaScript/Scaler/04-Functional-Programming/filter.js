const transactions = [1000, 2000, 3000, -4000, -5000, -6000, 7000];

const positiveTransactions = () => transactions.filter((transaction) => transaction > 0);

console.log(positiveTransactions());