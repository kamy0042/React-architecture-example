import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { TodoView } from '~/adapter/todo/todo.mapper';

export type DispatchDeleteTodoItem = (
    item: TodoView['id'],
) => {
    payload: string;
    type: string;
};

export const useDispatchDeleteTodoItem = (
    deleteItem: ActionCreatorWithPayload<string, string>,
): DispatchDeleteTodoItem => {
    const dispatch = useDispatch();

    return (id) => dispatch(deleteItem(id));
};
