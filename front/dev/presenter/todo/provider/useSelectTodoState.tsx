import { createSelector } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { DenormaliseTodoList } from '~/adapter/todo/todo.denormalise';
import { TodoListView } from '~/adapter/todo/todo.mapper';
import { RootState } from '~/store';

const makeSelectTodo = () =>
    createSelector(
        (state: RootState) => state.todo,
        (_: unknown, denormalise: DenormaliseTodoList) => denormalise,
        (todo, denormalise) => denormalise(todo),
    );

export const useSelectTodoState = (denormalise: DenormaliseTodoList): TodoListView => {
    const selectTodo = useMemo(makeSelectTodo, []);

    return useSelector((state: RootState) => selectTodo(state, denormalise));
};
