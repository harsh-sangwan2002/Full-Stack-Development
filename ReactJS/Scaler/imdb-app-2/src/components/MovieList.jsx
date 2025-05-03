import React from 'react'
import Movie from './Movie'
import { useSelector } from 'react-redux'

const MovieList = () => {

    const movies = useSelector(state => state.movieList.movies);

    return (
        <div className='movie-list'>
            {
                movies.map((movie, idx) => (
                    <Movie movie={movie} key={idx} />
                ))
            }
        </div>
    )
}

export default MovieList
