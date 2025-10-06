const cart = ["shoes", "kurta", "pants"];

// Promise is an object which represents eventual completion/failure of an asynchronous operation.
const promise = createOrder(cart);
promise
    .then(orderId => proceedToPayment(orderId))
    .then(paymentInfo => showOrderSummary(paymentInfo))
    .then(paymentInfo => updateWalletBalance(paymentInfo))
    .catch(err => console.log(err))