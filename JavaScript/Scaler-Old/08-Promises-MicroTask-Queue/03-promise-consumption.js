const fs = require('fs').promises;

const promise = fs.readFile('f1.txt');

/**
* 'then' is an event listener over promise -> fn when promise is resolved(task is done)
* -> Promise gives us a method named then which is an event listener over promise and it triggers when the promise is resolved(the task is done). 
* catch -> is also an event listener on promises -> fn when promise is rejected(You get an error
* -> catch is also an event listener over promise and it triggers when the promise is rejected(you get an error).
* */
promise.then(data => {
    console.log(data.toString());
}).catch(err => {
    console.log(err);
})