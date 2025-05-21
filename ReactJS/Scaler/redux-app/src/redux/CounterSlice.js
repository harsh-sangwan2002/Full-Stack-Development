import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 0,
}

export const counterSlice = createSlice({
    name: 'Counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += action.payload || 1
        },
        decrement: (state, action) => {
            state.count -= action.payload || 1
        },
    }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer