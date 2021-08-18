import { apiClient } from '~/infrastructure/apiClient';
import { buildGetRepository } from '~/infrastructure/buildRepository';
import { TodoListApiInput, TodoListApiOutput } from './todo.apiType';

const toFrontData = (data: TodoListApiOutput) => data.map((item) => ({ id: item.id.toString(), title: item.title }));

const buildFetchTodoList = <T, T2>(converter: (response: T) => T2) => async (config?: TodoListApiInput) => {
    const repository = buildGetRepository(apiClient('get'))('todos', config);

    return converter(await repository());
};

export const todoRepository = { fetchTodoList: buildFetchTodoList(toFrontData) };
