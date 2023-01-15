import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    todo : []
};

const todoSlice = createSlice({
    name: 'check',
    initialState,
    reducers: {
        checkTodo: (state, action) => {
            const checkIdx = action.payload;
            console.log(current(state))

            const result = current(state).todo.filter((item, idx) => idx == checkIdx);
            if (result.length > 0) {
                return {todo: current(state).todo.filter((item, idx) => idx != checkIdx)}
            }
            else {
                return {todo: [...state.todo, checkIdx]};
            }
        }
    }
});

export const {checkTodo} = todoSlice.actions;
export default todoSlice.reducer;