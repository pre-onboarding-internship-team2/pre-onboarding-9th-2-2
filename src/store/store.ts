import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from './modules/product.slice';
import { reservationSlice } from './modules/reservation.slice';

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    reservation: reservationSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

// store, dispatch 타입지정
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
