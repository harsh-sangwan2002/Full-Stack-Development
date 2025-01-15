const selectRef = document.querySelector('.filter select');
const movieDeleteIconRef = document.querySelectorAll('.movie-delete-icon');
const deleteAllButton = document.querySelector('.delete-all');
const moviesRef = document.querySelector('.movies');

selectRef.addEventListener('change', (event) => {

    const movieTitleRef = document.querySelectorAll('.movie-title');

    if (event.target.value == "all") {

        movieTitleRef.forEach(movieTitle => {
            movieTitle.parentElement.style.display = 'flex';
        });
    }

    else {
        movieTitleRef.forEach(movieTitle => {

            const title = movieTitle.textContent.split(":")[0].trim().toLocaleLowerCase();

            if (title === event.target.value) {
                movieTitle.parentElement.style.display = 'flex';
            }
            else {
                movieTitle.parentElement.style.display = 'none';
            }
        });
    }

});

movieDeleteIconRef.forEach(movieDeleteIcon => {

    movieDeleteIcon.addEventListener('click', (event) => {
        event.target.closest('.movie').remove();
    });
})

deleteAllButton.addEventListener('click', () => {
    moviesRef.innerHTML = '';
});