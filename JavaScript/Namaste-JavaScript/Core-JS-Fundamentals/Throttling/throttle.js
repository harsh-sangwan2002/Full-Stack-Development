function throttle(fn, delay) {
    let flag = true;
    return function (...args) {

        if (flag) {
            fn.apply(this, args);
            flag = false;
        }

        setTimeout(() => {
            flag = true;
        }, delay)
    }
}

const output = document.getElementById('output');

function handleScroll() {
    output.textContent = `Scroll position: ${window.scrollY}`;
}

const throttledScroll = throttle(handleScroll, 1000);

window.addEventListener('scroll', throttledScroll);