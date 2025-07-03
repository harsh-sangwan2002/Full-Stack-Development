import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination';

const MovieListPage = () => {

    const [movies, setMovies] = useState([]);
    const [pages, setPages] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
    const [currPage, setCurrPage] = useState(1);

    const handlePrev = (page) => {

        if (page == 1)
            return;

        setCurrPage(currPage => currPage - 1);
    }

    const handleClick = (page) => {
        setCurrPage(page);
    }

    const handleNext = () => {
        setCurrPage(currPage => currPage + 1);
    }

    const fetchMovies = async (page) => {
        const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${page}`);
        const data = await res.json();
        console.log(data.results);
        setMovies(data.results);
    }
    useEffect(() => {
        fetchMovies(currPage);
    }, [currPage])

    return (
        <div className='movie-list'>
            {
                movies.map((movie, idx) => (
                    <MovieCard movie={movie} key={idx} />
                ))
            }
            <Pagination pages={pages} currPage={currPage} handleClick={handleClick} handleNext={handleNext} handlePrev={handlePrev} />
        </div>
    )
}

export default MovieListPage
