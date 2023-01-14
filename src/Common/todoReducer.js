import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo : []
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setTodo: (state, action) => {
            return [...state, action.payload];
        }
    }
});

export const {setTodo} = todoSlice.actions;
export default todoSlice.reducer;