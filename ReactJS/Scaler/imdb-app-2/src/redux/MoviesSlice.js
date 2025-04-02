import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    totalPages: 0,
}

export const MoviesSlice = createSlice({
    name: "Movies",
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        setTotalPages: (state, action) => {
            state.totalPages = action.payload;
        },
        setActivePage: (state, action) => {
            state.activePage = action.payload;
        }
    }
})

export const fetchMovies = (pageNo) => (dispatch) => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNo}`)
        .then(response => response.json())
        .then(data => {
            dispatch(setMovies(data.results));
            dispatch(setTotalPages(data.total_pages));
            dispatch(setActivePage(pageNo));
        });
}

export const { setMovies, setTotalPages, setActivePage } = MoviesSlice.actions
export default MoviesSlice.reducer