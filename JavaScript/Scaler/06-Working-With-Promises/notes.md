Asynchronous Programming with Promises: Revision Notes
Introduction to Promises
Promises in JavaScript are a means to handle asynchronous operations, such as network requests or file I/O, without getting caught in "callback hell." A promise represents a value that may be available now, or in the future, or never.

States of a Promise
Pending: The state of the promise when it is neither fulfilled nor rejected.
Fulfilled (Resolved): The state of the promise when the operation is completed successfully.
Rejected: The state of the promise when the operation fails and an error exists.
Settled: The state of the promise when it has been either fulfilled or rejected .
Creating a Promise
A promise is created using the Promise constructor. It takes a function (executor) as its argument which is executed immediately, and provides two functions: resolve for successful operations and reject for failed ones.

let promise = new Promise(function(resolve, reject) {
// executor function
});
Example using a coin toss to simulate outcomes:

let coinTossPromise = new Promise(function(resolve, reject) {
setTimeout(() => {
const isHeads = Math.random() > 0.5;
if (isHeads) {
resolve("Heads");
} else {
reject("Tails - Coin toss resulted in tails, considered as a failure.");
}
}, 1000);
});
Consuming a Promise
The outcomes of a promise can be handled using:

.then() for successful completions
.catch() for errors
.finally() for logic to run irrespective of the outcome
coinTossPromise
.then((result) => console.log(result))
.catch((error) => console.error(error))
.finally(() => console.log("Coin toss completed."));
Asynchronous Operations with Promises
Promise Chaining
Promise chaining allows you to link several asynchronous operations. The .then() method returns a new promise, enabling sequential execution of tasks.

Example of chaining promises:

cleanRoom().then(function(result){
console.log(result);
return removeGarbage(result);
}).then(function(result){
console.log(result);
return winIcecream(result);
}).catch(function(error){
console.error(error);
});
If any of the promises in the chain are rejected, the .catch() method is triggered .

Handling Promises with Timeout
You can delay promise execution using setTimeout. This can be handy for mimicking asynchronous delays:

let delayedPromise = new Promise(function(resolve) {
setTimeout(() => {
resolve("Resolved after a delay");
}, 2000);
});
Multiple Promises Execution
You can manage multiple promises using Promise.all to resolve them concurrently or Promise.allSettled if you want to handle every settled promise:

Promise.all([promise1, promise2]).then(function(values) {
console.log(values);
});
Event Loop and Promises
JavaScript uses an event loop to handle asynchronous operations. Promises use microtask queues, which have higher priority over callback queues. This ensures promise callbacks (then/catch) execute before other asynchronous callbacks once their promises are settled .

Real-World Example: File Reading
Promises can be especially useful for file operations in Node.js where non-blocking I/O is critical. Using the fs.promises API, you can easily read files with asynchronous operations:

const fs = require('fs').promises;

fs.readFile('file.txt')
.then(data => console.log(data.toString()))
.catch(error => console.error(error));
This prevents "callback hell" and makes the code cleaner and easier to manage .

In conclusion, understanding promises is crucial for managing asynchronous tasks efficiently in JavaScript. They provide a more powerful way to handle operations that were typically handled via callbacks, solving several problems related to error management and readability. Experiment with promises in different scenarios to become proficient in using them for reliable JavaScript programming .
