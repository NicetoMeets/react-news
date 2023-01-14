import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo : []
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setTodo: (state, action) => {
            // return {todo: []}
            return {todo: [...state.todo, action.payload]};

        },
        removeTodo: (state, action) => {
            console.log(state)
            return {todo: []};
        }
    }
});

export const {setTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;