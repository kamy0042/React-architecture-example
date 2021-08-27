import { TodoListContainer } from '~/apps/todo/component/TodoList';
import { PageBuilder } from '../PageBuilder';

export const TodoListPage = (): JSX.Element => <PageBuilder body={<TodoListContainer />} />;
