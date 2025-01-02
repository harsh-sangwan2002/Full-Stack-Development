import React, { useState } from "react";
import styleObject from "./style.module.css";
import useFetchParams from "./useFetchParams";

function InfiniteScroll() {
    const [page, setPage] = useState(1);
    const [posts, error, loader] = useFetchParams(page);

    return (
        <div>
            {posts.map((post, idx) => (
                <div className={styleObject.book_title} key={idx}>
                    {post.title}
                </div>
            ))}
            {loader && <div className={styleObject.loader}>Loading...</div>}
            {error && <div className={styleObject.error}>{error}</div>}
            <button onClick={() => setPage((prevPage) => prevPage + 1)}>Next</button>
            <div>{page}</div>
        </div>
    );
}

export default InfiniteScroll;
