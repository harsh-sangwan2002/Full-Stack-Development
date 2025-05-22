import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { addToWatchlist, removeFromWatchlist } from "../redux/WatchListSlice";

const Movie = ({ movie }) => {

    const watchlist = useSelector(state => state.watchList);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();

        if (watchlist[movie.id]) {
            dispatch(removeFromWatchlist(movie.id));
        }

        else {
            dispatch(addToWatchlist({ ...movie }));
        }

    }

    return (
        <Link to={`/single-movie/${movie.id}`} className="movie">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <button onClick={handleClick}>{watchlist[movie.id] ? '-' : '+'} WatchList</button>
            </div>
        </Link>
    )
}

export default Movie
