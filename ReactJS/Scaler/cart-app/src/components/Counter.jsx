import React, { useEffect, useState } from 'react'

const Counter = ({ quantity, onUpdate, productId }) => {

    const [qty, setQty] = useState(quantity)

    // Mount
    useEffect(() => {
        setInterval(() => {
        }, 1000)
        console.log("Counter mounted")
    }, [])

    // Update
    useEffect(() => {
        console.log("Counter updated")
    }, [qty])

    // Re-render
    useEffect(() => {
        console.log("Counter re-render")
    })

    // Unmount
    useEffect(() => {
        return () => {
            console.log("Counter unmounted")
        }
    }, [])

    const increment = () => {
        setQty(qty + 1)
        onUpdate(productId, qty + 1)
    }

    const decrement = () => {
        if (qty > 0) {
            setQty(qty - 1)
            onUpdate(productId, qty - 1)
        }
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            {qty}
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter
