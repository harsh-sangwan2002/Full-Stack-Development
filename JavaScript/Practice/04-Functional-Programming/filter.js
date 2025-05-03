const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

const positiveTransactions = transactions.filter((amount) => amount > 0);
console.log(positiveTransactions);