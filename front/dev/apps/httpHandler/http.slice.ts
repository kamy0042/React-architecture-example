import { AnyAction, createSlice, PayloadAction, ThunkDispatch } from '@reduxjs/toolkit';
import { ApiError, ApiResponse } from '~/infrastructure/buildRepository';

type HttpStore = {
    error: string;
    status: number | undefined;
    isFetched: boolean;
};

const initialState: HttpStore = {
    error: '',
    status: undefined,
    isFetched: false,
};

export const httpSlice = createSlice({
    name: 'http',
    initialState,
    reducers: {
        initHttpState: () => initialState,
        setFetchFailed: (state, action: PayloadAction<string>) => ({
            ...state,
            error: action.payload,
            isFetched: false,
        }),
        setFetchSuccess: (state) => ({
            ...state,
            error: '',
            isFetched: true,
        }),
        resetError: (state) => ({
            ...state,
            error: '',
        }),
    },
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const handleFetchStatus = <T>(
    typeGuard: (arg: unknown) => arg is ApiError,
    result: ApiResponse<T>,
    dispatch: ThunkDispatch<unknown, unknown, AnyAction>,
) => {
    if (typeGuard(result)) {
        dispatch(httpSlice.actions.setFetchFailed(result));
    } else {
        dispatch(httpSlice.actions.setFetchSuccess());
    }
};

export default httpSlice.reducer;
