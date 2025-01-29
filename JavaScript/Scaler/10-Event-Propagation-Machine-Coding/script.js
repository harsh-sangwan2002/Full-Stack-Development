const containerRef = document.querySelector('.container');
const rowRef = document.querySelector('.row');

containerRef.addEventListener('click', function (e) {

    e.stopPropagation();
    console.log('containerRef > ', e.target);

    if (e.target.classList.contains('btn-plus')) {
        const quantity = e.target.closest('.quantity');
        const countRef = quantity.querySelector('.count');
        let currentValue = parseInt(countRef.innerText, 10) || 0;
        countRef.innerText = currentValue + 1;
    }

    if (e.target.classList.contains('btn-minus')) {
        const quantity = e.target.closest('.quantity');
        const countRef = quantity.querySelector('.count');
        let currentValue = parseInt(countRef.innerText, 10) || 0;
        countRef.innerText = currentValue - 1;
    }
}, true);

// true -> event capturing phase enabled
document.addEventListener('click', e => {
    console.log("Document > ", e.target);
}, true)

rowRef.addEventListener('click', e => {
    console.log("rowRef >", e.target);
}, true)