import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    todo : []
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setTodo: (state, action) => {
            return {todo: [...state.todo, action.payload]};
        },
        updateTodo: (state, action) => {

        },
        removeTodo: (state, action) => {
            const deleteIdx = action.payload;
            console.log(current(state).todo.filter((item, idx) => {
                console.log(idx != deleteIdx)
                console.log(idx, deleteIdx)
                return (idx != deleteIdx)
            }))
            return {todo: current(state).todo.filter((item, idx) => idx != deleteIdx)};
        }
    }
});

export const {setTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;