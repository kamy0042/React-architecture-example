import { denormaliseTodoList } from '~/adapter/todo/todo.denormalise';
import { TodoListView } from '~/adapter/todo/todo.mapper';
import { deleteTodoItem } from '~/store/todo/todoReducer';
import { useDispatchDeleteTodoItem, DispatchDeleteTodoItem } from './behavior/useDispatchDeleteTodoItem';
import { useSelectTodoState } from './provider/useSelectTodoState';

export const useTodoState = (): TodoListView => useSelectTodoState(denormaliseTodoList);

export const useDeleteTodoItem = (): DispatchDeleteTodoItem => useDispatchDeleteTodoItem(deleteTodoItem);
