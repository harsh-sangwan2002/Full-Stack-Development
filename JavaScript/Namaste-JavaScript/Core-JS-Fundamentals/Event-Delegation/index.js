const category = document.querySelector('#category');

category.addEventListener('click', e => {
    console.log(e.target.textContent);
})