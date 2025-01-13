import React, { useRef, useState } from 'react'

function UseRef() {

    const [count, setCount] = useState(0);
    // Refs don't cause re-render
    const countRef = useRef(0);

    // useRef is used for values that are not needed for rendering
    const handleIncrement = () => {
        // setCount((prevCount) => prevCount + 1);
        countRef.current++;

        console.log(count);
        console.log(countRef.current);
    }

    return (
        <div className='container'>
            Count: {countRef.current}
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default UseRef
