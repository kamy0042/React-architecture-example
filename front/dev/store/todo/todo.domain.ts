export type Todo = {
    id: string;
    title: string;
};

export type TodoState = {
    [key: string]: Todo;
};

export const addTodo = (state: TodoState, item: TodoState): TodoState => ({ ...state, ...item });

export const deleteTodo = (state: TodoState, id: Todo['id']): TodoState => {
    const { [id]: _item, ...newState } = state;

    return newState;
};
