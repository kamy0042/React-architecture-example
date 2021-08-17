import { AxiosRequestConfig } from "axios";
import { apiClient } from "./apiClient";

export const buildFetchRepositroy = (path:string) => async<T, T2>(converter:(response:T) => T2, config?:AxiosRequestConfig) => {
    const res = await apiClient<T>(path, config);

    return converter(res);
}
