import React from 'react'

const Movie = ({ movie, watchlist, setWatchlist }) => {

    const handleWatchlist = () => {
        if (watchlist[movie.id]) {
            const newWatchlist = { ...watchlist }
            delete newWatchlist[movie.id]
            setWatchlist(newWatchlist)
        }
        else {
            setWatchlist({ ...watchlist, [movie.id]: movie })
        }
        console.log(watchlist);
    }

    return (
        <div className='movie'>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />
            <div className='movie-info'>
                <h3>{movie.title}</h3>
                <button onClick={handleWatchlist}>{watchlist[movie.id] ? '-' : '+'}Add To WatchList</button>
            </div>
        </div>
    )
}

export default Movie
