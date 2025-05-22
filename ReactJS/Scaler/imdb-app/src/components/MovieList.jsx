import { useSelector } from "react-redux";
import Movie from "./Movie";

const MovieList = () => {

    const movies = useSelector(state => state.movieList.movies);
    return (
        <div className="movie-list">
            {
                movies.map((movie, idx) => (
                    <Movie movie={movie} key={idx} />
                ))
            }
        </div>
    )
}

export default MovieList
