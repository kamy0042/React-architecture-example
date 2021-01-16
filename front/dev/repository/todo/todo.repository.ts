import { todoDriver, TodoScheme } from './todo.driver';

export const fetchAsyncTodoList = async () => {
    const validataData = (data: TodoScheme) => {
        const filterd = data.map((item) => ({ id: item.id.toString(), title: item.title }));

        return Object.fromEntries(filterd.map((item) => [item.id, item]));
    };

    return validataData(await todoDriver());
};
