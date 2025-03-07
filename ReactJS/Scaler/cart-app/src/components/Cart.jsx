import React, { useState } from 'react'
import Counter from './Counter'

const Cart = () => {

    const [products, setProducts] = useState([
        { id: 1, name: "Product 1", price: 100, quantity: 0 },
        { id: 2, name: "Product 2", price: 150, quantity: 2 },
        { id: 3, name: "Product 3", price: 250, quantity: 4 },
    ])

    const handleCheckout = () => {
        console.log(products)
    }

    const handleQuantityChange = (id, quantity) => {
        console.log("Quantity changed to: ", id, quantity)
        const updatedProducts = products.map((product, idx) => {
            if (idx === id) {
                return { ...product, quantity }
            }
            return product
        })
        setProducts(updatedProducts)
    }

    return (
        <ul>
            {
                products.map((product, idx) => (
                    <li key={idx}>{product.name} - Rs.{product.price} <Counter quantity={product.quantity} onUpdate={handleQuantityChange} productId={product.id} /></li>
                ))
            }
            <button onClick={handleCheckout}>Checkout</button>
        </ul>
    )
}

export default Cart
