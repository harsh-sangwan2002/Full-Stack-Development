import React, { useState } from 'react'
// using normal styling sheet is not a good practice
// import ./style.css

// Resolves the confilicts of class names
import styleObject from './style.module.css'
import useFetchParams from './useFetchParams'

function InfiniteScroll() {

    // Data -> Fetch from an api
    // Next -> Next api call will be made
    const [page, setPage] = useState(1);
    const [posts, error, loader] = useFetchParams(page);

    return (
        <div>
            {
                posts.map((post, idx) => (
                    <div className={styleObject.book_title} key={idx}>{post.title}</div>
                ))
            }
            {loader && <button className={styleObject.loader}></button>}
            {error && <div>{error}</div>}
            <div>{page}</div>
            <button onClick={() => setPage(page + 1)}>Next</button>

        </div>
    )
}

export default InfiniteScroll
