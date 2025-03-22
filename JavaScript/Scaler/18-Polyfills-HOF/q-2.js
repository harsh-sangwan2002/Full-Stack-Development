const transactions = [
    { customerId: 1, amount: 100, date: '2024-03-01' },
    { customerId: 2, amount: 150, date: '2024-03-02' },
    { customerId: 1, amount: 200, date: '2024-03-02' },
    { customerId: 3, amount: 50, date: '2024-03-02' },
    { customerId: 2, amount: 120, date: '2024-03-03' },
]

// Q-1 totalTransactionsCount
function totalTransactionsAmount() {
    return transactions.length;
}
console.log(totalTransactionsAmount());

// Q-2 totalTransactionsAmount
function totalTransactionsAmount() {
    return transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
}
console.log(totalTransactionsAmount());

// Q-3 transactionsByDate
function transactionsByDate(date) {
    return transactions.filter(transaction => transaction.date === date);
}
console.log(transactionsByDate('2024-03-02'));

// Q-4 transactionsByCustomerId
function transactionsByCustomerId(customerId) {
    return transactions.filter(transaction => transaction.customerId === customerId);
}
console.log(transactionsByCustomerId(2));

// Q-5 groupByDate
function groupByDate() {
    return transactions.reduce((acc, transaction) => {
        acc[transaction.date] = acc[transaction.date] || [];
        acc[transaction.date].push(transaction);
        return acc;
    }, {});
}
console.log(groupByDate());