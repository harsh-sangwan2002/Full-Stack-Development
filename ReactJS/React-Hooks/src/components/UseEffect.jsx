// State is simply data that changes with time across re-renders.
// useEffect is a hook that allows you to perform side effects in function components.
import React, { useState, useEffect } from 'react'

function UseEffect() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        // Side effect - The code we want to run
        console.log("Count is: ", count);

        // Optional return function
        return () => {
            console.log("I am being cleaned up.");
        }
    }, [count]) // Optional dependancy array

    return (
        <div className="container">
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
        </div>
    )
}

export default UseEffect