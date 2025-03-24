import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}

export const watchListSlice = createSlice({
    name: "watchList",
    initialState,
    reducers: {
        addToWatchList: (state, action) => {
            state[action.payload.id] = action.payload;
        },
        removeFromWatchList: (state, action) => {
            delete state[action.payload.id];
        },
    },
})

export const { addToWatchList, removeFromWatchList } = watchListSlice.actions;
export default watchListSlice.reducer;