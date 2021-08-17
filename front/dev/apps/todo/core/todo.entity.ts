/**
 * type
 */

export type TodoStatus = 'deleted' | 'finished' | 'active';

/**
 * ui
 */

export type Todo = {
    title: string;
    id: string;
    status?:TodoStatus // モックデータにstatusが存在しないため、undefiendを許容している
}

export type TodoList = Todo[];

/**
 * function
 */

export const toTodoStatusText = (todo:Todo) => {
    const toText = (status:Todo['status']) => {
        switch(status) {
            case 'active':
                return '実施予定';
            case 'deleted':
                return '削除済み';
            case 'finished':
                return '完了';
            default:
                throw new Error('invalid status')
        }
    }

    return {...todo, status:toText(todo.status)}
}
