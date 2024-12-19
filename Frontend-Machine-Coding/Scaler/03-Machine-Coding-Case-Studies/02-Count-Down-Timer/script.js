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
const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
const pauseBtn = document.querySelector('.pause');
const continueBtn = document.querySelector('.continue');

// Inputs
const hoursInput = document.querySelector('#hours');
const minutesInput = document.querySelector('#minutes');
const secondsInput = document.querySelector('#seconds');

// Text
const hourText = document.querySelector('#hr-text');
const minuteText = document.querySelector('#min-text');
const secondsText = document.querySelector('#sec-text');

let seconds_in_hours = 3600;
let seconds_in_minutes = 60;

let counterId;
let saveTimeLeft;


resetSetup();

// Event Listener
startBtn.addEventListener("click", (e) => {

    let hours = getValidInput(hoursInput.value);
    let minutes = getValidInput(minutesInput.value);
    let seconds = getValidInput(secondsInput.value);

    if (seconds > 60) {
        minutes += seconds / 60;
        seconds %= 60;
    }

    if (minutes > 60) {
        hours += minutes / 60;
        minutes % 60;
    }
    
    if (!validateInput(hours, minutes, seconds))
        return;

    let countDownTime = hours * seconds_in_hours + minutes * seconds_in_minutes + seconds;

    runCountDownTimer(countDownTime);

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
    resetBtn.style.display = "block";
})

pauseBtn.addEventListener('click', e => {

    // Clear the interval for pausing the timer
    clearInterval(counterId);

    // No UI change required.

    pauseBtn.style.display = "none";
    continueBtn.style.display = "block";
})

continueBtn.addEventListener("click", (e) => {

    // Continue the timer.
    runCountDownTimer(saveTimeLeft);

    // No change in UI.

    pauseBtn.style.display = "block";
    continueBtn.style.display = "none";
    resetBtn.style.display = "block";
});

resetBtn.addEventListener('click', e => {

    resetSetup();
})

function resetSetup() {

    hourText.textContent = "00";
    minuteText.textContent = "00";
    secondsText.textContent = "00";

    hoursInput.value = "00";
    minutesInput.value = "00";
    secondsInput.value = "00";

    saveTimeLeft = 0;
    clearInterval(counterId);

    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    resetBtn.style.display = "none";
    continueBtn.style.display = "none";
}

function runCountDownTimer(countDownTime) {

    counterId = setInterval(() => {
        console.log(countDownTime);

        saveTimeLeft = countDownTime--;

        if (countDownTime < 0)
            clearInterval(counterId);

        else
            updateUI(countDownTime);

    }, 1000)
}

function updateUI(countDownTime) {
    let hour = Math.floor(countDownTime / 3600);
    let minute = Math.floor((countDownTime % 3600) / 60);
    let second = Math.floor(countDownTime % 60);

    updateUI_Hour_Min_Sec(hour, minute, second);
}

function updateUI_Hour_Min_Sec(hour, minute, second) {
    hourText.textContent = hour < 10 ? `0${hour}` : hour;
    minuteText.textContent = minute < 10 ? `0${minute}` : minute;
    secondsText.textContent = second < 10 ? `0${second}` : second;
}

function getValidInput(value) {
    console.log(parseInt(0));
    return parseInt(!value ? 0 : value);
}

function validateInput(hours, minutes, seconds) {

    if (hours < 0 || minutes < 0 || seconds < 0) {
        alert("Negative values are not allowed.");
        return false;
    }

    else if (hours > 24) {
        alert("Invalid hours input.");
        return false;
    }

    else if (minutes > 60) {
        alert("Invalid minutes input.");
        return false;
    }

    else {
        return true;
    }
}

