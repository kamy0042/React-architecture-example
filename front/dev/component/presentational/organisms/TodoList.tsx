import React, { FC } from 'react';

export type TodoListProps = {
    list: {
        title: string;
        id: string;
    }[];
    handleClick: (id: TodoListProps['list'][number]['id']) => () => void;
};

export const TodoList: FC<TodoListProps> = ({ list, handleClick }) => (
    <>
        <ul>
            {list.map((item) => (
                <li key={item.id}>
                    <p>{item.title}</p>
                    <button type="button" onClick={handleClick(item.id)}>
                        delete
                    </button>
                </li>
            ))}
        </ul>
    </>
);
