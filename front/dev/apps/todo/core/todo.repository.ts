import { AxiosRequestConfig } from 'axios';
import { buildFetchRepositroy } from '~/infrastructure/buildRepository';
import { TodoListApi } from './todo.apiType';

const fetchTodo = buildFetchRepositroy('todos');

const fetchTodoList = async (config?:AxiosRequestConfig) => {
    // eslint-disable-next-line arrow-body-style
    const convertData = (data: TodoListApi) => {
        return  data.map((item) => ({ id: item.id.toString(), title: item.title }));
        // return Object.fromEntries(filterd.map((item) => [item.id, item]));
    };

    return fetchTodo(convertData, config);
};

export const todoRepository = {fetchTodoList}
