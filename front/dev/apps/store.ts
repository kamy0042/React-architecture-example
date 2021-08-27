import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todo/presenter/todo.slice';
import httpReducer from './httpHandler/http.slice';

const store = configureStore({
    reducer: {
        todo: todoReducer,
        http: httpReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
