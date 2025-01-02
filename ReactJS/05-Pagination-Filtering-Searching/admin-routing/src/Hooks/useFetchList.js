import { useEffect, useState } from 'react'

function useFetchList(url) {

    const [productList, setProductList] = useState([]);
    const [loader, setLoader] = useState(true);
    const [error, setError] = useState("");

    const getProducts = function () {

        (async function () {

            try {

                setLoader(true);
                const response = await fetch(url);
                const data = await response.json();
                setProductList(data);
                setLoader(false);

            } catch (err) {
                setLoader(false);
                setTimeout(() => {
                    setError(err.message);
                }, 2000);
            } finally {
                setLoader(false);
            }
        })()
    }

    useEffect(getProducts, [url]);

    return [productList, loader, error];
}

export default useFetchList
