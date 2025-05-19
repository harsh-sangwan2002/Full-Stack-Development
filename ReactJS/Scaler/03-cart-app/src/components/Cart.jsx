import { useState } from 'react'
import Counter from './Counter'

const Cart = () => {

    const [products, setProducts] = useState([
        { name: 'Product 1', price: 100, quantity: 0 },
        { name: 'Product 2', price: 200, quantity: 1 },
        { name: 'Product 3', price: 300, quantity: 2 },
    ])

    return (
        <div>
            <h1>Cart Page</h1>
            <ul>
                {
                    products.map((product, idx) =>
                        <li key={idx}>{product.name} - ${product.price} <Counter qty={product.quantity} /></li>
                    )
                }
            </ul>
        </div>
    )
}

export default Cart
