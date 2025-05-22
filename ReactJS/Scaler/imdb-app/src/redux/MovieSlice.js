import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    totalPages: 0,
};

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        setTotalPages: (state, action) => {
            state.totalPages = action.payload;
        },
    }
});

export const { setMovies, setTotalPages } = movieSlice.actions;
export default movieSlice.reducer;