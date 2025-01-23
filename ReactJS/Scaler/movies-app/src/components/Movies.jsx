import React, { useEffect, useState } from 'react'
import { movies } from './GetMovies'
import MovieCard from './MovieCard';
import Pagination from './Pagination';

function Movies() {

    const [movieList, setMovieList] = useState([]);

    // Lifting the state up to Movies.jsx
    const [pageNo, setPageNo] = useState(1);

    const handlePrev = () => {
        if (pageNo > 1)
            setPageNo(pageNo - 1);
    }

    const handleNext = () => {
        setPageNo(pageNo + 1);
    }

    useEffect(() => {
        const res = movies.results;
        setMovieList(res);
    }, [pageNo])

    return (
        <>
            <h1 className='text-center m-12 text-4xl'>Trending Movies</h1>
            <div className='flex flex-wrap justify-around mt-20'>
                {
                    !movieList ? <div>Loading...</div> :
                        movieList.map(movie => (
                            <MovieCard key={movie.id} title={movie.title} backdrop_path={movie.backdrop_path} />
                        ))
                }
            </div>
            <Pagination handlePrev={handlePrev} handleNext={handleNext} pageNo={pageNo} />
        </>
    )
}

export default Movies
