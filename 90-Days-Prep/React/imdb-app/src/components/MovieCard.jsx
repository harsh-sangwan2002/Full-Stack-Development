import React from 'react'

const MovieCard = ({ movie }) => {
    return (
        <div className='movie'>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
            <h2>{movie.original_title}</h2>
            <button>+ Add to WatchList</button>
        </div>
    )
}

export default MovieCard
