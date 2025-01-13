import React, { useState, useEffect } from 'react'

function StopWatch() {

    const [time, setTime] = useState(0);
    const [isRunning, setRunning] = useState(false);

    // 1st solution -> failed
    // setInterval(() => {
    //     setTime(time + 1);
    //     console.log(time);
    // }, 1000);

    // 2nd solution ->
    useEffect(() => {

        let interval;
        if (isRunning) {

            interval = setInterval(() => {
                setTime((prevTime) => {
                    return Number(prevTime) + 1;
                })
            }, 1000)
        }

        else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        }
    })

    const handleStart = () => {
        setRunning(true);
    }

    const handlePause = () => {
        setRunning(false);
    }

    const handleReset = () => {
        setTime(0);
        setRunning(false);
    }

    return (
        <div className='stopwatch'>
            <h1>StopWatch</h1>
            <p>{time}</p>
            <div className='buttons'>
                <button onClick={handleStart}>Start</button>
                <button onClick={handlePause}>Pause</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default StopWatch
