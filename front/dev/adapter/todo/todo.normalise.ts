import { TodoState } from '~/store/todo/todo.domain';
import { TodoView } from './todo.mapper';

export type NormariseTodoItem = (todo: TodoView) => TodoState;

export const normaliseTodoItem: NormariseTodoItem = (todo) => {
    const { id, title } = todo;

    return { [id]: { id, title } };
};
