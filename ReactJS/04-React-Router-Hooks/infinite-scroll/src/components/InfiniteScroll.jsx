import React, { useState } from 'react'
// using normal styling sheet is not a good practice
// import ./style.css

// Resolves the confilicts of class names
import styleObject from './style.module.css'

function InfiniteScroll() {

    // Data -> Fetch from an api
    // Next -> Next api call will be made
    const [posts, setPosts] = useState([
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, commodi?",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, commodi?",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, commodi?",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, commodi?",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, commodi?",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, commodi?",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, commodi?",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, commodi?",
    ]);
    const [page, setPage] = useState(1);

    return (
        <div>
            {
                posts.map((post, idx) => (
                    <div className={styleObject.book_title} key={idx}>{post}</div>
                ))
            }
            <div>
                {page}
            </div>
            <br />
            <button onClick={() => setPage(page + 1)}>Next</button>
            <br />
            <button className={styleObject.loader}>
            </button>
        </div>
    )
}

export default InfiniteScroll
