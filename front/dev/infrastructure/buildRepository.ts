import { AxiosRequestConfig } from 'axios';
import { ApiClient } from './apiClient';

// prettier-ignore
export const buildGetRepository = (client: ApiClient) => (path: string, config?: AxiosRequestConfig) => <T>(): Promise<T> => {
    const res = client<T>(path, config);

    return res;
};

// prettier-ignore
export const buildPostRepository = (client: ApiClient) => (path: string, data: Record<string, unknown>) => <T>(): Promise<T> => {
    const res = client<T>(path, data);

    return res;
};
