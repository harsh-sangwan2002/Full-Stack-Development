/********************* 1.Array : Collection of values
 * 2. Set : Collection of unique values *********************/

const uniqueSet = new Set();

// Add any value to set
uniqueSet.add(1);
uniqueSet.add(2);
uniqueSet.add(3);
uniqueSet.add(3); // Duplicate value will be ignored

console.log(uniqueSet); // Set { 1, 2, 3 }
console.log(uniqueSet.size); // 3
console.log(uniqueSet.has(2)); // true
uniqueSet.delete(2);
console.log(uniqueSet);