import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todo/presenter/todo.slice';

const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
