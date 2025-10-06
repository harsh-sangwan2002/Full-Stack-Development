import { useState } from "react"

const Counter = () => {

    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount(count - 1);
    }

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div className="container">
            <button onClick={decrement}>Decrement</button>
            <h1>Count is {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter
