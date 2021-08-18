import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export type ApiClientMethod = 'get' | 'delete' | 'post' | 'put' | 'patch';
export type ApiConfig<Type> = Type extends 'write' ? Record<string, unknown> : AxiosRequestConfig;
export type ApiClient = <Response, Type extends 'write' | undefined = undefined>(
    path: string,
    config?: ApiConfig<Type>,
) => Promise<Response>;

export const apiClient: (method: ApiClientMethod) => ApiClient = (method) => async <
    Response,
    Type extends 'write' | undefined = undefined
>(
    path: string,
    config?: ApiConfig<Type>,
) => {
    const connection = () => {
        const baseURL = 'https://jsonplaceholder.typicode.com';
        const timeout = 800;
        const headers = { 'Content-Responseype': 'application/json' };

        return axios.create({ baseURL, timeout, headers });
    };

    try {
        if (method === 'get') {
            const response: AxiosResponse = await connection().get<Response>(path, config);

            return response.data as Promise<Response>;
        }
        if (method === 'delete') {
            const response: AxiosResponse = await connection().delete<Response>(path, config);

            return response.data as Promise<Response>;
        }
        if (method === 'post') {
            const response: AxiosResponse = await connection().post<Response>(path, config);

            return response.data as Promise<Response>;
        }
        if (method === 'put') {
            const response: AxiosResponse = await connection().put<Response>(path, config);

            return response.data as Promise<Response>;
        }
        if (method === 'patch') {
            const response: AxiosResponse = await connection().patch<Response>(path, config);

            return response.data as Promise<Response>;
        }

        throw new Error('invalid method');
    } catch (error) {
        throw new Error(error);
    }
};
