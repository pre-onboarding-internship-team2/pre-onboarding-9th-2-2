import { configureStore } from "@reduxjs/toolkit";
import { itemSlice } from "./item/itemSlice";

export const store = configureStore({
  reducer: {
    item: itemSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
