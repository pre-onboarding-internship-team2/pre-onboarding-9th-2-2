import { configureStore } from "@reduxjs/toolkit";
import { itemSlice } from "./item/itemSlice";
import { reservationSlice } from "./reservation/reservationSlice";

export const store = configureStore({
  reducer: {
    item: itemSlice.reducer,
    reservation: reservationSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
