import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <button onClick={decrement}>Decrement</button>
            <span>Count is {count}</span>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter
