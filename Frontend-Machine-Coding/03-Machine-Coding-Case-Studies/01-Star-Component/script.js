const starContainer = document.querySelector('#star-container');
const allStars = document.querySelectorAll('.star');
const ratingCount = document.querySelector('#count');

let clickedStarIdx = 0;
let currentHoverIdx = -1;

starContainer.addEventListener('click', (e) => {

    const target = e.target;
    if (target.classList.contains('star')) {
        clickedStarIdx = parseInt(target.getAttribute('data-idx'));
        fillStarUptoIdx(clickedStarIdx);
        updateCount();
    }
})

starContainer.addEventListener('mouseover', e => {

    const target = e.target;
    if (target.classList.contains('star')) {
        currentHoverIdx = target.getAttribute('data-idx');
        fillStarUptoIdx(currentHoverIdx);
    }
})

starContainer.addEventListener('mouseleave', e => {

    resetAllStars();
    fillStarUptoIdx(clickedStarIdx);
})

function updateCount() {
    ratingCount.innerText = clickedStarIdx;
}

function resetAllStars() {
    allStars.forEach(star => {
        star.classList.remove('yellow');
    })
}
function fillStarUptoIdx(idx) {
    resetAllStars();

    for (let i = 0; i < idx; i++)
        allStars[i].classList.add('yellow');
}