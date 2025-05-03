function debouncedFn(fn, delay) {

    let timer;
    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}

function renderProducts(data) {
    console.log(data);
}

async function fetchProducts(e) {

    const value = e.target.value;
    console.log(value);
    const res = await fetch(`https://fakestoreapi.com/products?query=${value}`);
    const data = await res.json();
    renderProducts(data);
}

const fetchDebouncedFn = debouncedFn(fetchProducts, 1000);
// Attach the debounced function to the input event

const inputRef = document.querySelector('input');
inputRef.addEventListener('keyup', fetchDebouncedFn);