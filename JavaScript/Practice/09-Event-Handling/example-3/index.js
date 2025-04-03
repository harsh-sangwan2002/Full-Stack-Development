const deleteIcon = document.querySelectorAll('.movie-delete-icon');
const removeAll = document.querySelector('button');
const movies = document.querySelector('.movies');

deleteIcon.forEach(icon => {
    icon.addEventListener('click', e => {
        console.log(e.target.parentNode.remove());
    })
})

removeAll.addEventListener('click', e => {
    movies.innerHTML = '';
})