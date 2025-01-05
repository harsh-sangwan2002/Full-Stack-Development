import React from 'react'
import useFetchList from '../Hooks/useFetchList'
import '../index.css';
import Product from './Product'

function Home() {

    const [productList, loader, error, setProductList, setLoader, setError] = useFetchList('https://fakestoreapi.com/products');

    const deleteProduct = (idx) => {

        const restOfProducts = productList.filter((product) => idx !== product.id);
        setProductList(restOfProducts);
    }

    return (
        <>
            {
                loader === true ? <h1>Loading...</h1> : <>
                    {
                        error ? <h1>{error}</h1> :
                            productList.length === 0 ? <h1>Nothing here</h1> :
                                <main className='product_wrapper'>
                                    {
                                        productList.map((product, idx) => (
                                            < Product
                                                product={product}
                                                deleteProduct={deleteProduct} />
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
