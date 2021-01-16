import { apiClient } from '../apiClient';

export type TodoScheme = { id: number; title: string; [key: string]: any }[];

export const todoDriver = async (): Promise<TodoScheme> => {
    const isTodoScheme = (arg: unknown): arg is TodoScheme => {
        const t = arg as TodoScheme;

        return typeof t?.[0]?.id === 'number' && typeof t?.[0]?.title === 'string';
    };

    const res = await apiClient<TodoScheme>('/todos');
    if (!isTodoScheme(res)) {
        throw new Error('invaild format');
    }

    return res;
};
