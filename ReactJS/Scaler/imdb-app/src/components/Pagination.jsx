import { useState } from 'react'

const Pagination = ({ onPageChange }) => {
    const [pages, setPages] = useState([1, 2, 3, 4, 5, 6, 7]);
    const [selectedPage, setSelectedPage] = useState(pages[0]);

    const handlePageChange = (page) => {
        const resArr = [];
        const totalVisiblePages = 8;

        let startPage = Math.max(1, page - Math.floor(totalVisiblePages / 2));
        let endPage = startPage + totalVisiblePages - 1;

        for (let i = startPage; i <= endPage; i++) {
            resArr.push(i);
        }

        setPages(resArr);
        setSelectedPage(page);
        onPageChange(page);
    };


    return (
        <div className='pagination-section'>
            <button onClick={() => {
                if (selectedPage > 0)
                    handlePageChange(selectedPage - 1)
            }}>
                &lt;
            </button>
            {
                pages.map(page => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={selectedPage == page ? 'active' : ""}
                    >
                        {page}
                    </button>
                ))
            }
            <button onClick={() => handlePageChange(selectedPage + 1)}>&gt;</button>
        </div >
    )
}

export default Pagination
