const cart = ["shoes", "pants", "kurta"];

/************************ Consumer Code  *********************/
const validateCart = (cart) => false;
const promise = createOrder(cart);
console.log(promise);

// Whatever happens after the catch will be called
promise.then((orderId) => {
    console.log(orderId);
    return orderId;
}).then((orderId) => {
    return proceedToPayment(orderId);
}).then(paymentInfo => {
    console.log(paymentInfo);
}).catch(err => {
    console.log(err.message);
}).then(()=>{
    console.log("I will definitely be called.");
})

/************************ Producer Code  *********************/
function proceedToPayment(orderId) {

    return new Promise((resolve, rejecte) => {
        resolve('Payment successful');
    })
}

function createOrder(cart) {

    // This constructor takes a function with resolve, reject args
    const pr = new Promise((resolve, reject) => {

        // createOrder
        // validate cart
        // orderId
        if (!validateCart(cart)) {
            const err = new Error('Cart is not valid!');
            reject(err);
        }

        // logic for createOrder
        let orderId = "12345";
        if (orderId) {
            setTimeout(() => {
                resolve(orderId);
            }, 5000)
        }
    })
    return pr;
}