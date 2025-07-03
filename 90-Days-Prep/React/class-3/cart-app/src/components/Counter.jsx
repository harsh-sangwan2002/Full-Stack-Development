import React, { useEffect, useState } from 'react'

const Counter = () => {

    console.log("render");

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }

    const decrement = () => {
        if (count == 0)
            return;

        else
            setCount(prevCount => prevCount - 1);
    }

    useEffect(() => {
        console.log("componentDidMount");
    }, [])

    useEffect(() => {
        console.log("componentDidUpdate");
    }, [count])

    useEffect(() => {
        console.log("mounted");
        return () => {
            console.log("componentWillUnmount");
        }
    }, [])

    return (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button onClick={decrement}>-</button>{count}<button onClick={increment}>+</button>
        </div>
    )
}

export default Counter
