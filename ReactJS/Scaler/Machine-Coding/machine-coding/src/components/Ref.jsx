import React, { useRef, useState, useEffect } from 'react'

function Ref() {

    // useRef is used to access the DOM element directly
    const inputRef = useRef(null);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        console.log("Timer callback running");
        const intervalId = setInterval(() => {
            setSeconds((prevSec => prevSec + 1));
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    })

    const handleClick = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>Click on me to focus on input</button>
            <div>
                <h1>Timer</h1>
                <h2>{seconds}</h2>
            </div>
        </div>
    )
}

export default Ref
