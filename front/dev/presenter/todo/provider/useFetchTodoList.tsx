import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncTodoList } from '~/repository/todo/todo.repository';
import { addTodoItem } from '~/store/todo/todoReducer';

export const useFetchTodoList = () => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        console.log('fetch start');

        const fetchTodoList = async () => {
            setLoading(true);

            // 非同期処理
            const todos = await fetchAsyncTodoList();

            if (todos) {
                setError(null);
                dispatch(addTodoItem(todos));
            } else {
                setError('エラーが発生しました');
            }

            setLoading(false);
        };

        void fetchTodoList();
    }, [dispatch]);

    return [loading, error];
};
