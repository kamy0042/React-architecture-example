import { AxiosInstance } from 'axios';

export type ApiError = string;
export type ApiResponse<Response> = Response | ApiError;
export const isApiError = (arg: unknown): arg is ApiError => {
    const t = arg as ApiError;

    return typeof t === 'string' || typeof t === 'number';
};

// prettier-ignore
export const buildGetRepository = (client:AxiosInstance) => <T, T2>(converter: (response: T) => T2) => (path:string) => async <Input>(arg?:Input) => {
    const res = (await client.get<ApiResponse<T>>(path, arg));

    return isApiError(res) ? res : converter(res.data as T);
};
