'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);
    const message = document.querySelector('.message');

    if (!guess) {
        message.textContent = '⛔️ No number!'
    } else if (guess == secretNumber) {
        message.textContent = '🎉 Correct number!'
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    } else if (guess < secretNumber) {
        if (score > 1) {
            message.textContent = '📉 Too low!'
            score--;
            document.querySelector('.label-score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
        }
    } else if (guess > secretNumber) {
        if (score > 1) {
            message.textContent = '📈 Too high!';
            score--;
            document.querySelector('.label-score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {

    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
})