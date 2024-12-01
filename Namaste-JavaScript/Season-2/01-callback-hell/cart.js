const cart = ['shoes', 'pants', 'kurta'];

// 1. Create Order
// 2. Payment

// Problems with callBack -->
// 1. CallBack Hell (Pyramid of Doom)
// 2. Inversion of Control
api.createOrder(cart, function () {

    api.prcoeedToPayment(function () {

        api.showOrderSummary(function(){

            api.updateWallet()
        })
    })
})