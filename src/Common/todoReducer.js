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
            const updateTodo = action.payload.updateInput;
            const updateIdx = action.payload.updateIdx;
            const result = current(state).todo.map((item, idx) => {
                if (idx == updateIdx) return updateTodo;
                else return item;
            });
            return {todo: result}
        },
        removeTodo: (state, action) => {
            const deleteIdx = action.payload;
            return {todo: current(state).todo.filter((item, idx) => idx != deleteIdx)};
        }
    }
});

export const {setTodo, updateTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;