import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const apiClient = async <T>(path: string, config?: AxiosRequestConfig): Promise<T> => {
    const connection = () => {
        const baseURL = 'https://jsonplaceholder.typicode.com';
        const timeout = 500;
        const headers = { 'Content-Type': 'application/json' };

        return axios.create({ baseURL, timeout, headers });
    };

    try {
        const response: AxiosResponse = await connection().get<T>(path, config);

        return response.data as Promise<T>;
    } catch (error) {
        throw new Error(error);
    }
};
