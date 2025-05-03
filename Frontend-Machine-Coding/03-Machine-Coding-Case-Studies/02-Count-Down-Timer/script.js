/** 
 *  Must have features 
        * Pass time i hours, minutes and seconds.
        * play and pause button.
        * phase 1: Validation check and print timer on console.
        * phase 2: All button should work and UI update.
        * phase 3: Validation so that if user enters any timer greater than 60, then it should move to left bit.
        * 
 *  JavaScript:
           a. We have to listen to five event listners -> H,M,S, Start, Pause, reset, continue
           b. Validation check
           c. Update UI
           
        Edge Case:
           Reset Option.
*/

// Buttons
const starBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
const pauseBtn = document.querySelector('.pause');
const continueBtn = document.querySelector('.continue');

// Inputs
let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');
let timeLeft = 0;
let timerId;

// Text
const hoursText = document.querySelector('#hr-text');
const minutesText = document.querySelector('#min-text');
const secondsText = document.querySelector('#sec-text');

// Event listeners
starBtn.addEventListener('click', (e) => {

    hours = parseInt(hours.value) || 0;
    minutes = parseInt(minutes.value) || 0;
    seconds = parseInt(seconds.value) || 0;

    timeLeft = hours * 3600 + minutes * 60 + seconds;
    console.log(timeLeft);
    startTimerCountDown();
})

function startTimerCountDown() {

    timerId = setInterval(() => {

        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timerId);
            resetAll();
            return;
        }

        console.log(timeLeft);
        updateUI();
    }, 1000)
}

function updateUI() {

    let hoursLeft = Math.floor(timeLeft / 3600);
    let minuteLeft = Math.floor((timeLeft % 3600) / 60);
    let secondsLeft = Math.floor(timeLeft % 60);

    hoursText.innerText = hoursLeft;
    minutesText.innerText = minuteLeft;
    secondsText.innerText = secondsLeft;
}

pauseBtn.addEventListener('click', () => {

    console.log("Pause was clicked");
    clearInterval(timerId);
    updateUI();
})

continueBtn.addEventListener('click', () => {

    console.log("continue was clicked");
    startTimerCountDown();
})

resetBtn.addEventListener('click', () => {

    console.log("reset was clicked");
    resetAll();
})

function resetAll() {

    document.querySelector('#hours').value = "";
    document.querySelector('#minutes').value = "";
    document.querySelector('#seconds').value = "";

    hoursText.innerText = "00";
    minutesText.innerText = "00";
    secondsText.innerText = "00";

    clearInterval(timerId);
    timeLeft = 0;
}