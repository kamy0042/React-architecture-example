import { useDeleteTodoItem, useTodoState } from '~/presenter/todo';
import { useFetchTodoList } from '~/presenter/todo/provider/useFetchTodoList';
import { TodoList, TodoListProps } from '../presentational/organisms/TodoList';

export const TodoListContainer = (): JSX.Element => {
    const [loading, error] = useFetchTodoList();
    const list = useTodoState();
    const deleteTodoItem = useDeleteTodoItem();
    const handleClick = (id: TodoListProps['list'][number]['id']) => () => deleteTodoItem(id);

    return <TodoList list={list} handleClick={handleClick} />;
};
