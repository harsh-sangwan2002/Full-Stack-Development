import { useEffect } from "react";
import MovieList from "../components/MovieList"
import Pagination from "../components/Pagination";
import { useDispatch } from "react-redux";
import { setMovies, setTotalPages } from "../redux/MovieSlice";

const MovieListPage = () => {
    const dispatch = useDispatch();

    const getMovies = async (page) => {
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${page}`);
        const data = await response.json();
        const res = data.results;
        dispatch(setMovies(res));
        dispatch(setTotalPages(res.total_pages));
    }

    useEffect(() => {
        getMovies(1);
    }, [])

    return (
        <div className="movie-list-page">
            <h1>Movie List Page</h1>
            <MovieList />
            <Pagination onPageChange={getMovies} />
        </div>
    )
}

export default MovieListPage
