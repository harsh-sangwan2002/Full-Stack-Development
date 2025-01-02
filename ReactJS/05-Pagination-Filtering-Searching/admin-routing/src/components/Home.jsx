import React from 'react'

function Home() {

    const product = {
        title: "Product name",
        price: 200
    }

    return (
        <main className='product_wrapper'>
            <div className='product'>
                <img src={'https://picsum.photos/200/300'} alt="" className='product_image' />
                <div className="product_meta">
                    <p className="product_title">{product.title}</p>
                    <p className="product_price">$ {product.price}</p>
                </div>
            </div>
            <div className='product'>
                <img src={'https://picsum.photos/200/300'} alt="" className='product_image' />
                <div className="product_meta">
                    <p className="product_title">{product.title}</p>
                    <p className="product_price">$ {product.price}</p>
                </div>
            </div>
            <div className='product'>
                <img src={'https://picsum.photos/200/300'} alt="" className='product_image' />
                <div className="product_meta">
                    <p className="product_title">{product.title}</p>
                    <p className="product_price">$ {product.price}</p>
                </div>
            </div>
            <div className='product'>
                <img src={'https://picsum.photos/200/300'} alt="" className='product_image' />
                <div className="product_meta">
                    <p className="product_title">{product.title}</p>
                    <p className="product_price">$ {product.price}</p>
                </div>
            </div>
            <div className='product'>
                <img src={'https://picsum.photos/200/300'} alt="" className='product_image' />
                <div className="product_meta">
                    <p className="product_title">{product.title}</p>
                    <p className="product_price">$ {product.price}</p>
                </div>
            </div>
            <div className='product'>
                <img src={'https://picsum.photos/200/300'} alt="" className='product_image' />
                <div className="product_meta">
                    <p className="product_title">{product.title}</p>
                    <p className="product_price">$ {product.price}</p>
                </div>
            </div>
        </main>
    )
}

export default Home
