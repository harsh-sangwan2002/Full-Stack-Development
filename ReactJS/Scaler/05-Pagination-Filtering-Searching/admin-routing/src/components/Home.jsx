import React, { useEffect, useState } from 'react';
import useFetchList from '../Hooks/useFetchList';
import '../index.css';
import Product from './Product';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortedList, setSortedList] = useState([]);
    
    // Custom Hook
    const [productList, loader, error, setProductList] = useFetchList('https://fakestoreapi.com/products');

    const deleteProduct = (idx) => {
        const restOfProducts = productList.filter((product) => idx !== product.id);
        setProductList(restOfProducts);
    };

    // Filter the product list based on search term
    useEffect(() => {
        let filteredList = productList;
        if (searchTerm !== '') {
            filteredList = productList.filter((product) => {
                let lowerSearchTerm = searchTerm.toLowerCase();
                let lowerTitle = product.title.toLowerCase();
                return lowerTitle.includes(lowerSearchTerm);
            });
        }
        setSortedList(filteredList); // Update the sortedList state after filtering
    }, [searchTerm, productList]);

    // Sorting Functions
    const sortAsc = () => {
        const sorted = [...sortedList].sort((a, b) => a.price - b.price);
        setSortedList(sorted);
    };

    const sortDesc = () => {
        const sorted = [...sortedList].sort((a, b) => b.price - a.price);
        setSortedList(sorted);
    };

    return (
        <>
            <header className="nav_wrapper">
                <div className="search_box">
                    <input
                        className="search_input"
                        type="text"
                        placeholder="Search for products"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <ArrowCircleUpIcon className="icon" onClick={sortDesc} />
                    <ArrowCircleDownIcon className="icon" onClick={sortAsc} />
                </div>
            </header>
            {loader === true ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    {error ? (
                        <h1>{error}</h1>
                    ) : sortedList.length === 0 ? (
                        <h1>Nothing here</h1>
                    ) : (
                        <main className="product_wrapper">
                            {sortedList.map((product, idx) => (
                                <Product
                                    product={product}
                                    key={idx}
                                    deleteProduct={deleteProduct}
                                />
                            ))}
                        </main>
                    )}
                </>
            )}
        </>
    );
}

export default Home;
