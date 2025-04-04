import React, { useRef, useState } from 'react'

const StopWatch = () => {

    const [time, setTime] = useState(0);
    let intervalId = useRef(null);

    const displayTime = () => {
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time % 3600) / 60);
        let seconds = time % 60;

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        return `${hours}:${minutes}:${seconds}`;
    }

    const handleStart = () => {

        intervalId.current = setInterval(() => {
            setTime(prevTime => prevTime + 1);
            displayTime();
        }, 1000);
    }

    const handleStop = () => {
        clearInterval(intervalId.current);
        displayTime();
    }

    const handleReset = () => {
        clearInterval(intervalId.current);
        setTime(0);
        displayTime();
    }

    return (
        <div>
            <h1>StopWatch</h1>
            <p>{displayTime()}</p>
            <div className='buttons'>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default StopWatch
