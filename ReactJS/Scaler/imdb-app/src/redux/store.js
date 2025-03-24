import { configureStore } from "@reduxjs/toolkit";
import watchListReducer from "./WatchListSlice";

export const store = configureStore({
    reducer: {
        watchList: watchListReducer,
    }
});
