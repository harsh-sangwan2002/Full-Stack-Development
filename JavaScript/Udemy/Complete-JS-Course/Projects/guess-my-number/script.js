'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = (element, message) => {
    element.textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);
    const element = document.querySelector('.message');

    if (!guess) {
        displayMessage(element, '⛔️ No number!')
    } else if (guess == secretNumber) {
        displayMessage(element, '🎉 Correct number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if (score > highScore) {
            highScore = score;
            displayMessage(document.querySelector('.highscore'), highScore);
        }

    } else if (guess < secretNumber) {
        if (score > 1) {
            displayMessage(element, '📉 Too low!')
            score--;
            displayMessage(document.querySelector('.label-score'), score);
        } else {
            displayMessage(element, '💥 You lost the game!');
        }
    } else if (guess > secretNumber) {
        if (score > 1) {
            displayMessage(element, '📈 Too high!');
            score--;
            displayMessage(document.querySelector('.label-score'), score);
        } else {
            displayMessage(element, '💥 You lost the game!');
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {

    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    displayMessage(document.querySelector('.message'), 'Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    displayMessage(document.querySelector('.number'), '?');
    document.querySelector('.guess').value = '';
})