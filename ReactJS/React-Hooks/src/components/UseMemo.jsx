import React, { useState, useMemo } from 'react'
import { initialItems } from '../utils'

function UseMemo() {

    const [count, setCount] = useState(0);
    const [items] = useState(initialItems);
    const selectedItem = useMemo(() => items.find(item => item.id == count), [count, items])

    return (
        <div className="container">
            <h1>Count: {count}</h1>
            <h1>Selected Item: {selectedItem?.id}</h1>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
        </div>
    )
}

export default UseMemo