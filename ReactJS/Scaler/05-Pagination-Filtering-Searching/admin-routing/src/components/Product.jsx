import React from 'react'

function Product({ product, deleteProduct }) {
    return (
        <div className='product' key={product.id}>
            <img src={product.image} alt="" className='product_image' />
            <div className="product_meta">
                <p className="product_title">{product.title}</p>
                <p className="product_price">$ {product.price}</p>
                <button onClick={() => deleteProduct(product.id)}>Delete</button>
            </div>
        </div>
    )
}

export default Product
