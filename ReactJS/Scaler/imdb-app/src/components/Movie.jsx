import { Link } from "react-router-dom"

const Movie = ({ movie }) => {
    return (
        <Link to={`/single-movie/${movie.id}`} className="movie">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <button onClick={(e) => e.preventDefault()}>+ WatchList</button>
            </div>
        </Link>
    )
}

export default Movie
