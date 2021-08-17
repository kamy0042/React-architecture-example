import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "~/apps/store";

export const todoListSelector = createSelector(
    (state:RootState) => state.todo.list,
    (list) => list.map((item,i) => ({...item, count:`No.${i}`}))
)
