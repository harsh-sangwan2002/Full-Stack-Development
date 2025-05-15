const friends = ['Miachel', 'Steven', 'Peter'];
// Add an element at the end of the array
let arrayLength = friends.push('John');
console.log(friends, arrayLength);

// Add an element at the beginning of the array
arrayLength = friends.unshift('George');
console.log(friends, arrayLength);

// Remove an element from the end of the array
arrayLength = friends.pop();
console.log(friends, arrayLength);

// Remove an element from the beginnning of the array 
arrayLength = friends.shift();
console.log(friends, arrayLength);

console.log(friends.indexOf('Steven'));

console.log(friends.includes('Steven'));