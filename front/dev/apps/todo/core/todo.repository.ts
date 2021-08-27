import httpClient from '~/infrastructure/apiClient';
import { buildGetRepository } from '~/infrastructure/buildRepository';
import { TodoListApiOutput } from './todo.apiType';

const toFrontData = (data: TodoListApiOutput) => data.map((item) => ({ id: item.id.toString(), title: item.title }));

export const todoRepository = { fetchList: buildGetRepository(httpClient)(toFrontData)('todos') };
