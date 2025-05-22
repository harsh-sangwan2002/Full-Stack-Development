import { createSlice } from "@reduxjs/toolkit";

const getInitialWatchList = () => {
    const storedList = localStorage.getItem("watchlist");
    return storedList ? JSON.parse(storedList) : {};
};

const watchListSlice = createSlice({
    name: "watchList",
    initialState: getInitialWatchList(),
    reducers: {
        addToWatchlist: (state, action) => {
            state[action.payload.id] = action.payload;
            localStorage.setItem("watchlist", JSON.stringify(state));
        },
        removeFromWatchlist: (state, action) => {
            delete state[action.payload];
            localStorage.setItem("watchlist", JSON.stringify(state));
        },
    }
});

export const { addToWatchlist, removeFromWatchlist } = watchListSlice.actions;
export default watchListSlice.reducer;