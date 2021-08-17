import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoList } from '../core/todo.entity';
import { asyncFetchTodoList } from './todo.action';

type TodoStore = {
    list:TodoList;
    isBeforeFetch:boolean;
    isFetchFailed:boolean;
}

const initialState: TodoStore = {
    list:[],
    isBeforeFetch:true,
    isFetchFailed:false,
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        deleteToDo:(state, action:PayloadAction<string>) => ({
            ...state,
            list:state.list.filter(item => item.id !== action.payload)
        })
    },
    extraReducers:(builder) => {
        builder.addCase(asyncFetchTodoList.pending, (state) => ({
            ...state,
            isBeforeFetch:true,
            isFetchFailed:false
        }))
        builder.addCase(asyncFetchTodoList.fulfilled, (state, action) => ({
            ...state,
            list:action.payload,
            isBeforeFetch:false,
            isFetchFailed:false
        }))
        builder.addCase(asyncFetchTodoList.rejected, (state) => ({
            ...state,
            isBeforeFetch:false,
            isFetchFailed:true
        }))
    }
});

export default todoSlice.reducer;
