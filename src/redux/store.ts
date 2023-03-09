import { configureStore } from '@reduxjs/toolkit';

import { cartSlice } from './slice/cartslice';
import { productSlice } from './slice/productslice';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    product: productSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
