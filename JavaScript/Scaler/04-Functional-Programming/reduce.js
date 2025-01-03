const transactions = [1000, 2000, 3000, -4000, -5000, -6000, 7000];

const totalTransactionsValue = () => transactions.reduce((acc, transaction) => acc + transaction, 0);

console.log(totalTransactionsValue());