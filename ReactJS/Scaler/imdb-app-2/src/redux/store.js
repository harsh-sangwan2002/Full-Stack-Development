import { configureStore } from "@reduxjs/toolkit";
import watchListReducer from "./WatchListSlice";
import moviesReducer from "./MoviesSlice";

export const store = configureStore({
    reducer: {
        watchList: watchListReducer,
        movieList: moviesReducer,
    }
});
