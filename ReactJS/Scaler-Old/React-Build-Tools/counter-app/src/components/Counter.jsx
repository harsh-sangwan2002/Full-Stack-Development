import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
        console.log(count);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}

export default Counter
