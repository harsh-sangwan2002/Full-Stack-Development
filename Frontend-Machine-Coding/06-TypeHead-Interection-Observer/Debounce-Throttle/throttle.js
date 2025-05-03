let productValue = 200;
function apply20Coupon() {
    console.log("New price: ", productValue - (0.20 * productValue));
}

// When you want to an event to happen only once in an interval
function throttle(cb, delay) {

    let flag = false;

    return function (...args) {

        if (flag) {
            console.log("This coupon is already applied, wait for 3hrs");
            return;
        }

        cb(...args);
        setTimeout(() => {
            flag = true;
        }, delay)
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