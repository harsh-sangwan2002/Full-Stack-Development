import { Link } from "react-router-dom"

const Movie = ({ movie, watchlist, setWatchlist }) => {

    const handleClick = (e) => {
        e.preventDefault();

        if (watchlist[movie.id]) {
            const newWatchlist = { ...watchlist };
            delete newWatchlist[movie.id];
            localStorage.setItem('watchlist', JSON.stringify(newWatchlist));
            setWatchlist(newWatchlist);
        }

        else {
            const newWatchlist = { ...watchlist, [movie.id]: movie };
            localStorage.setItem('watchlist', JSON.stringify(newWatchlist));
            setWatchlist(newWatchlist);
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
