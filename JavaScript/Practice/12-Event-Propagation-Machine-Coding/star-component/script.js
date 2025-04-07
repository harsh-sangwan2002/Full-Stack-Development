const starsContainer = document.querySelector('.stars');
let starIdx;

starsContainer.addEventListener('click', (event) => {
    const star = event.target.closest('.star');
    const rating = document.querySelector('.rating-count');

    starIdx = star.getAttribute('data-index');
    fillStars(starIdx);
    rating.innerText = starIdx;
});

starsContainer.addEventListener('mouseover', (e) => {

    const target = e.target;

    if (target.classList.contains('star')) {
        const idx = target.getAttribute('data-index');
        fillStars(idx);
    }
});

starsContainer.addEventListener('mouseout', (e) => {

    const target = e.target;

    if (target.classList.contains('star')) {
        fillStars(starIdx);
    }
});

const fillStars = (idx) => {
    const stars = starsContainer.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < idx) {
            star.classList.add('filled');
        } else {
            star.classList.remove('filled');
        }
    });
}