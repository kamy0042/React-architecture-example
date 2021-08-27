import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isApiError } from '~/infrastructure/buildRepository';
import { TodoList } from '../core/todo.entity';
import { asyncFetchTodoList } from './todo.action';

type TodoStore = {
    list: TodoList;
};

const initialState: TodoStore = {
    list: [],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        deleteToDo: (state, action: PayloadAction<string>) => ({
            ...state,
            list: state.list.filter((item) => item.id !== action.payload),
        }),
    },
    extraReducers: (builder) => {
        builder.addCase(asyncFetchTodoList.fulfilled, (state, action) => ({
            ...state,
            list: isApiError(action.payload) ? state.list : action.payload,
        }));
    },
});

export default todoSlice.reducer;
