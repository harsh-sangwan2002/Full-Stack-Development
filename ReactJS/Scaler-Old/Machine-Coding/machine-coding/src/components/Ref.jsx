import React, { useRef, useState, useEffect } from 'react'

function Ref() {

    // useRef is used to access the DOM element directly
    const inputRef = useRef(null);
    const intervaRef = useRef(null);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        console.log("Timer callback running");
        intervaRef.current = setInterval(() => {
            setSeconds((prevSec => prevSec + 1));
        }, 1000)

        return () => {
            clearInterval(intervaRef.current);
        }
    }, [])

    const handleClick = () => {
        inputRef.current.focus();
    }

    const handlePause = () => {
        console.log("Handle Pause");
        clearInterval(intervaRef.current);
    }

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>Click on me to focus on input</button>
            <div>
                <h1>Timer</h1>
                <h2>{seconds}</h2>
                <button onClick={handlePause}>Pause</button>
            </div>
        </div>
    )
}

export default Ref
