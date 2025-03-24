import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToWatchList } from '../redux/WatchListSlice';
import { removeFromWatchList } from '../redux/WatchListSlice';

const Movie = ({ movie }) => {

    const watchlist = useSelector(state => state.watchList);
    const dispatch = useDispatch();

    const handleWatchlist = () => {

        if (watchlist[movie.id])
            dispatch(removeFromWatchList({ ...movie }));

        else
            dispatch(addToWatchList({ ...movie }));
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
