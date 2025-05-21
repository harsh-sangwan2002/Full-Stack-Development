import Movie from "./Movie";

const MovieList = ({ movies, watchlist, setWatchlist }) => {
    return (
        <div className="movie-list">
            {
                movies.map((movie, idx) => (
                    <Movie movie={movie} key={idx} watchlist={watchlist} setWatchlist={setWatchlist} />
                ))
            }
        </div>
    )
}

export default MovieList
