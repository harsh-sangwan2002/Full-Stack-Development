import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const SingleMovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const getCurrentMovie = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3aec63790d50f3b9fc2efb4c15a8cf99`);
        const data = await response.json();
        setMovie(data);
    }

    useEffect(() => {
        getCurrentMovie();
    }, [])

    if (!movie) return <h2>Loading...</h2>;

    return (
        <div className="movie-detail-card">
            <img
                className="poster"
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
            />
            <div className="info">
                <h1>{movie.title}</h1>
                <p className="tagline">"{movie.tagline}"</p>
                <p className="overview">{movie.overview}</p>

                <div className="meta">
                    <p><strong>Release Date:</strong> {movie.release_date}</p>
                    <p><strong>Runtime:</strong> {movie.runtime} min</p>
                    <p><strong>Budget:</strong> ${movie.budget.toLocaleString()}</p>
                    <p><strong>Rating:</strong> {movie.vote_average} ⭐ ({movie.vote_count} votes)</p>
                    <p><strong>Genres:</strong> {movie.genres.map(g => g.name).join(", ")}</p>
                    {movie.belongs_to_collection && (
                        <p><strong>Collection:</strong> {movie.belongs_to_collection.name}</p>
                    )}
                    <div className="buttons">
                        <a className="homepage-link" href={movie.homepage} target="_blank" rel="noreferrer">
                            Visit Official Site
                        </a>
                        <button id="go-back"> <Link to="/">Go Back</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleMovieDetail
