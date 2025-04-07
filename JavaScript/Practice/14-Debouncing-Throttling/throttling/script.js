function throttleFn(fn, delay) {

    let flag = false;

    return function (...args) {
        if (flag) return;

        flag = true;

        setTimeout(() => {
            fn.apply(this, args);
            flag = false;
        }, delay);
    }
}

console.log(document.getElementById('scrollPosition').textContent);

function updateScrollPosition() {
    document.getElementById('scrollPosition').textContent = window.scrollY;
    console.log('scrolled');
}

const debouncedScrollFn = throttleFn(updateScrollPosition, 500);
window.addEventListener('scroll', debouncedScrollFn);