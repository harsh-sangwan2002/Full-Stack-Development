// useFetchParams Custom Hook
import { useState, useEffect } from "react";

function useFetchParams(...dependencies) {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setLoader(true);
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${dependencies[0]}`);
                if (!res.ok) throw new Error(`Error: ${res.statusText}`);
                const data = await res.json();
                setPosts((prevPosts) => [...prevPosts, ...data]);
            } catch (err) {
                setError(err.message || "An unexpected error occurred");
            } finally {
                setLoader(false);
            }
        }

        fetchData();
    }, dependencies);

    return [posts, error, loader];
}

export default useFetchParams;
