const cart = ["shoes", "kurta", "pants"];

// Returns orderId
// createOrder(cart, function (orderId) {

//     // Inversion of Control
//     proceedToPayment(orderId);
// });

// // {data:undefined}
// const promise = createOrder(cart);
// promise.then(function(orderId){
//     proceedToPayment(orderId);
// })

const GITHUB_API = "https://api.github.com/users/harsh-sangwan2002";

// Cannot mutate the state of this promise
const user = fetch(GITHUB_API);
console.log(user);

user.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})