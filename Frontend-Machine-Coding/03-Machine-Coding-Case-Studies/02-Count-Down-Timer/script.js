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
const start = document.querySelector('.start');
const reset = document.querySelector('.reset');
const pause = document.querySelector('.pause');
const resume = document.querySelector('.continue');

// Inputs
const hoursInput = document.querySelector('#hours');
const minutesInput = document.querySelector('#minutes');
const secondsInput = document.querySelector('#seconds');

let seconds_in_hours = 3600;
let seconds_in_minutes = 60;

let counterId;
let saveTime;

resetSetup();
// Event Listener
start.addEventListener("click",(e)=>{

    let hours = getValidInput(hoursInput.value);
    let minutes = getValidInput(minutesInput.value);
    let seconds = getValidInput(secondsInput.value);

    if(!validateInput(hours,minutes,seconds))
        return;

    let countDownTime = hours*seconds_in_hours + minutes*seconds_in_minutes + seconds;

    runCountDownTimer(countDownTime);
})

function runCountDownTimer(countDownTime){

    counterId = setInterval(()=>{
        console.log(countDownTime);
        countDownTime--;

        if(countDownTime<0)
            clearInterval(counterId);
    },1000)
}

function getValidInput(value) {
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

