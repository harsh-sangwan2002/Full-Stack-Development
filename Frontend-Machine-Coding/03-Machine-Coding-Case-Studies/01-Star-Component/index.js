const starContainer = document.querySelector('#star-container');
const stars = document.querySelectorAll('.star');
const count = document.querySelector('#count');

let clickedStarIdx = 0; // Index of the last clicked star
let currentHoverIdx = -1; // Index of the currently hovered star

// On mouse click
starContainer.addEventListener('click', (e) => {
    if (e.target.hasAttribute("idx")) {
        clickedStarIdx = parseInt(e.target.getAttribute("idx"));
        fillStarUptoIdx(clickedStarIdx);
        updateCount();
    }
});

// On mouse hover
starContainer.addEventListener("mouseover",(e)=>{
    if(e.target.hasAttribute("idx")){
        currentHoverIdx = parseInt(e.target.getAttribute("idx"));
        fillStarUptoIdx(currentHoverIdx);
    }
})

// On mouse leave
starContainer.addEventListener("mouseleave",(e)=>{
    resetAllStars();
    fillStarUptoIdx(clickedStarIdx);
})

function updateCount() {
    count.textContent = clickedStarIdx;
}

function resetAllStars() {
    stars.forEach(star => star.classList.remove("yellow"));
}

function fillStarUptoIdx(idx) {
    resetAllStars();

    for (let i = 0; i < idx; i++) {
        stars[i].classList.add('yellow');
    }
}
