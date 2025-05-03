import React, { useEffect, useState } from 'react'

function Infinite() {

    const [count, setCount] = useState(0);

    // componentDidMount + componentDidUpdate
    useEffect(() => {
        console.log("useEffect");
        document.title = count;

        // Side-effect work here
        let num = Math.random() * 100;
        setCount(num);
    })

    console.log("render");

    return (
        <div>
            <h1>Current Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )
}

export default Infinite
