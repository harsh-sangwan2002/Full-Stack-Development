let productValue = 200;
function apply20Coupon() {
    console.log("New price: ", productValue - (0.20 * productValue));
}

function throttle(cb, delay) {

    let flag = false;

    return function (...args) {

        if (flag) {
            console.log("This coupon is already applied, wait for 3hrs");
            return;
        }

        cb(...args);
        flag = true;
    }
}

const throttleAppliedCoupon = throttle(apply20Coupon, 3000);
throttleAppliedCoupon();
throttleAppliedCoupon();

setTimeout(() => {
    throttleAppliedCoupon()
}, 2000);

setTimeout(() => {
    throttleAppliedCoupon()
}, 5000);