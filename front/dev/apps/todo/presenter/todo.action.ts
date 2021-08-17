import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";
import { todoRepository } from "../core/todo.repository";

export const asyncFetchTodoList = createAsyncThunk(
    'todo/asyncFetchTodoList',
    async(config?:AxiosRequestConfig) => todoRepository.fetchTodoList(config)
)
