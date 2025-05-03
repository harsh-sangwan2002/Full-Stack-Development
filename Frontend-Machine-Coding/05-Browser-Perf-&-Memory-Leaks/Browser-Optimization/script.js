const inputFib = document.querySelector('input');
const fibButton = document.querySelector('.fib');
const fibValue = document.querySelector('#fib-value');

const incrementButton = document.querySelector('.increment-btn');
const incrementValue = document.querySelector('#incr-value');
let count = 0;

fibButton.addEventListener('click', (e) => {
    const n = inputFib.value;
    const res = calculateFibonacci(n);
    fibValue.innerText = res;
})

incrementButton.addEventListener('click', (e) => {
    count++;
    incrementValue.innerText = count;
})