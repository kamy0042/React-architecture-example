import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosRequestConfig } from 'axios';
import { handleFetchStatus } from '~/apps/httpHandler/http.slice';
import { isApiError } from '~/infrastructure/buildRepository';
import { todoRepository } from '../core/todo.repository';

export const asyncFetchTodoList = createAsyncThunk(
    'todo/asyncFetchTodoList',
    async (config: AxiosRequestConfig | undefined, thunkApi) => {
        const result = await todoRepository.fetchList(config);
        handleFetchStatus(isApiError, result, thunkApi.dispatch);

        return result;
    },
);
