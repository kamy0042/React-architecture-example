import axios, { AxiosError } from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com';
const timeout = 800;
const headers = { 'Content-Responseype': 'application/json' };
const httpClient = axios.create({ baseURL, timeout, headers });

const onSuccess = <T>(response: T) => response;
// eslint-disable-next-line @typescript-eslint/no-unsafe-return
const onError = (error: AxiosError<string>) => error.response?.status;

httpClient.interceptors.response.use(onSuccess, onError);

export default httpClient;
