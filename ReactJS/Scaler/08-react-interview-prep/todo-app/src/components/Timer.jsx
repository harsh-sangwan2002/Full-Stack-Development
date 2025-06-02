import { useRef, useState } from "react"

const Timer = () => {
    const [time, setTime] = useState(0);
    const timeRef = useRef(null);

    const startTimer = () => {
        timeRef.current = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);
    }

    const stopTimer = () => {
        clearInterval(timeRef.current);
    }

    const resetTimer = () => {
        clearInterval(timeRef.current);
        setTime(0);
    }

    const formatTime = (time) => {
        let seconds = time % 60;
        let minutes = Math.floor(time / 60) % 60;
        let hours = Math.floor(time / 3600);

        seconds = seconds < 10 ? `0${seconds}` : seconds;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        hours = hours < 10 ? `0${hours}` : hours;
        return `${hours}:${minutes}:${seconds}`;
    }

    return (
        <div>
            <h1>Timer App</h1>
            <h2>{formatTime(time)}</h2>
            <div className="buttons" style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    )
}

export default Timer
