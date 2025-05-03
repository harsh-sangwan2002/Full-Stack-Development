const filter = document.querySelector('.filter');
const allMovies = document.querySelectorAll('.movie');

filter.addEventListener('change', e => {
    const selectedValue = e.target.value;

    if (selectedValue === 'All') {
        allMovies.forEach(movie => {
            movie.style.display = 'block';
        });
    }
    else {
        allMovies.forEach(movie => {
            if (movie.getAttribute('data-genre') === selectedValue) {
                movie.style.display = 'block';
            } else {
                movie.style.display = 'none';
            }
        });
    }
})