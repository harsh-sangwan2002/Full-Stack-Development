import React, { memo, useCallback, useEffect, useRef, useState } from 'react'

function StopWatch() {

    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, [])

    const formatTime = useCallback((time) => {

        let seconds = time % 60;
        seconds = seconds < 10 ? `0${seconds}` : seconds;

        let minutes = Math.floor(time / 60) % 60;
        minutes = minutes < 10 ? `0${minutes}` : minutes;

        let hours = Math.floor(time / 3600);
        hours = hours < 10 ? `0${hours}` : hours;

        return `${hours}:${minutes}:${seconds}`;
    }, [])

    const handleStart = useCallback(() => {

        if (!intervalRef.current)
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000)
    }, [])

    const handlePause = useCallback(() => {

        clearInterval(intervalRef.current);
    }, [])

    const handleReset = useCallback(() => {

        clearInterval(intervalRef.current);
        setTime(0);
    }, []);

    return (
        <div className='timer-container'>
            <h1>{formatTime(time)}</h1>
            <div className="buttons-container">
                <button className="btn" onClick={handleStart}>Start Timer</button>
                <button className='btn' onClick={handlePause}>Stop Timer</button>
                <button className='btn' onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default memo(StopWatch);
