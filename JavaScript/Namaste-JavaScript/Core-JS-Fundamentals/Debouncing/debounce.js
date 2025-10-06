const input = document.querySelector('input');
let apiCalls = 0;

const fetchData = () => {
    apiCalls++;
    console.log("Fetching data", apiCalls);
};

const debouncedFn = function (fn, delay) {
    let timerId;

    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
};

const optFn = debouncedFn(fetchData, 100);
input.addEventListener('input', optFn);