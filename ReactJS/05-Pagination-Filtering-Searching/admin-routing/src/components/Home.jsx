import React from 'react'
import useFetchList from '../Hooks/useFetchList'
import '../index.css';

function Home() {

    const [productList, loader, error] = useFetchList('https://fakestoreapi.com/products');

    return (
        <>
            {
                loader === true ? <h1>Loading...</h1> : <>
                    {
                        error ? <h1>{error}</h1> :
                            productList.length === 0 ? <h1>Nothing here</h1> :
                                <main className='product_wrapper'>
                                    {
                                        productList.map((product, index) => (
                                            <div className='product'>
                                                <img src={'https://picsum.photos/200/300'} alt="" className='product_image' />
                                                <div className="product_meta">
                                                    <p className="product_title">{product.title}</p>
                                                    <p className="product_price">$ {product.price}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </main>
                    }
                </>
            }
        </>
    )
}

export default Home
