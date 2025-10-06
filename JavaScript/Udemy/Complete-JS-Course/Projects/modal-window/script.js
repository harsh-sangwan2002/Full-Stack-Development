'use strict';
const showModalButtons = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

showModalButtons.forEach(button => {
    button.addEventListener('click', e => {
        modal.classList.toggle('hidden');
        overlay.classList.toggle('hidden');
    })
})

closeModal.addEventListener('click', e => {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
})

overlay.addEventListener('click', e => {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
})

document.addEventListener('keydown', e => {
    if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
})