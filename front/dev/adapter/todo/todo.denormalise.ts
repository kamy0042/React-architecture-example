import { TodoState } from '~/store/todo/todo.domain';
import { TodoListView } from './todo.mapper';

export type DenormaliseTodoList = (state: TodoState) => TodoListView;

export const denormaliseTodoList: DenormaliseTodoList = (state) => Object.entries(state).map(([_key, value]) => value);
