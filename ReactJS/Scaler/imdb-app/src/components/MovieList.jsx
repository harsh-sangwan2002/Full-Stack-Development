import Movie from "./Movie";

const MovieList = ({ movies }) => {
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
