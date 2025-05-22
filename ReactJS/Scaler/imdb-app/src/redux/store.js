import { configureStore } from "@reduxjs/toolkit";
import watchListReducer from "./WatchListSlice";
import movieListReducer from "./MovieSlice";

export const store = configureStore({
    reducer: {
        watchList: watchListReducer,
        movieList: movieListReducer,
    },
});