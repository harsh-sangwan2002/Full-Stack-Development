const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

const totalTranscationValue = transactions.reduce((acc, ele) => acc + ele, 0);
console.log(totalTranscationValue);