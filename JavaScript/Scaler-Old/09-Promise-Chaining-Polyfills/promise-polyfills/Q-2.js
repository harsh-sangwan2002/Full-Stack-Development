// Question : 01
// Promise.reject(1).
//     catch((err) => {
//         console.log("3: ", err); // 3: 1
//         return 10;
//     }).then((data) => {
//         console.log("6: ", data) // 6: 10
//     }).catch(console.log);

// Question : 02
// Promise.reject(1)
//     .finally((data) => {
//         console.log("3", data) // 3 undefined
//         return Promise.reject('error')
//     })
//     .catch(console.log) // error
//     .then((data) => {
//         console.log("19: ", data) // 19: undefined
//     })
//     .catch(console.log);

/*
**
 * catch -> promise of the above is rejected / throw an error
 * if you have mixture and either then returns a value / catch return -> then will executed with the recieved value
 * finally -> finally works in both resolve or reject but  -> when you reject inside a finally then you upcoming catch will be called 
 * finally -> doesnot take any input / if you return either error/ rejected promise -> you need a catch to consume
 * 
 * **/

// // Question : 03
Promise.resolve(1)
    .finally((data) => {
        console.log("32: ", data) // 32: undefined
        return Promise.resolve('error'); // will be ignored
    })
    .catch((error) => {
        console.log("36: ", error)
        throw 'error2'
    })
    .finally((data) => {
        console.log("40: ", data) // 40: undefined
        let rProm = Promise.resolve(41)
        let thenProm = rProm.then(console.log) // 41
        return thenProm;
    })
    .then((data)=>console.log("then :",data)) // then : 1
    .catch(console.log); 