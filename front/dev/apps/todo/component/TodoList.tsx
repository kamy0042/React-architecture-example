import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/apps/store';
import { FetchWrapper } from '~/commonComponent/wrapper/FetchWrapper';
import { asyncFetchTodoList } from '../presenter/todo.action';
import { todoListSelector } from '../presenter/todo.selector';
import { todoSlice } from '../presenter/todo.slice';

/**
 * Type
 */

type TodoListProps = {
    list: {
        title: string;
        id: string;
        count: string;
    }[];
    handleClick: (id: TodoListProps['list'][number]['id']) => () => void;
};

/**
 * style
 */

// todo:emotionによるスタイル実装

/**
 * presentational component
 */

export const TodoList: FC<TodoListProps> = ({ list, handleClick }) => (
    <>
        <ul>
            {list.map((item) => (
                <li key={item.id}>
                    <p>{item.count}</p>
                    <p>{item.title}</p>
                    <button type="button" onClick={handleClick(item.id)}>
                        delete
                    </button>
                </li>
            ))}
        </ul>
    </>
);

/**
 * container component
 */

export const TodoListContainer = () => {
    const dispatch = useDispatch();
    const handleClick = (id: TodoListProps['list'][number]['id']) => () => dispatch(todoSlice.actions.deleteToDo(id));
    const list = useSelector(todoListSelector);
    const isFetched = useSelector((store: RootState) => store.http.isFetched);

    useEffect(() => {
        dispatch(asyncFetchTodoList());
    }, [dispatch]);

    return (
        <FetchWrapper isFetched={isFetched}>
            <TodoList handleClick={handleClick} list={list} />
        </FetchWrapper>
    );
};
