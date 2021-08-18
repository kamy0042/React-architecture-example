import { AxiosRequestConfig } from 'axios';

export type TodoListApiOutput = { userId: number; id: number; title: string; completed: boolean }[];
export type TodoListApiInput = AxiosRequestConfig;

export type TodoApiDeleteInput = TodoListApiOutput[number]['id'];
