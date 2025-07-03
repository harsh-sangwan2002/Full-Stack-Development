import React from 'react'
import Counter from './Counter'

const Cart = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Cart Page</h1>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>Product 1 - Rs.100 <Counter /></li>
                {/* <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>Product 2 - Rs.150 <Counter /></li> */}
                {/* <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>Product 3 - Rs.200 <Counter /></li> */}
                {/* <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>Product 4 - Rs.250 <Counter /></li> */}
            </ul>
        </div>

    )
}

export default Cart
