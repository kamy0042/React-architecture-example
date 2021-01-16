import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, TodoState } from './todo.domain';

const initialState: TodoState = {};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodoItem: (state, action: PayloadAction<TodoState>) => addTodo(state, action.payload),
        deleteTodoItem: (state, action: PayloadAction<string>) => deleteTodo(state, action.payload),
    },
});

export const { addTodoItem, deleteTodoItem } = todoSlice.actions;

export default todoSlice.reducer;
