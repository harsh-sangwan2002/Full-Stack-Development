import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todoSlice",
    initialState: {
        todoList: [],
        currTask: ""
    },
    reducers: {
        setValue: (state, obj) => {
            state.currTask = obj.payload;
        },
        addTodo: (state) => {
            state.todoList.push(state.currTask);
            state.currTask = ""
        }
    }
})

export default todoSlice;