import { createSlice } from '@reduxjs/toolkit';

import { ICart } from '../cart.interface';

export const cartSlice = createSlice({
  name: 'cartReducer',
  initialState: [] as ICart[],
  reducers: {
    increase: (state, action) => {
      const newProduct = state.find((product) => product.idx == action.payload.idx);
      if (newProduct) {
        newProduct.count += 1;
      } else {
        state.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    decrease: (state, action) => {
      const newProduct = state.find((product) => product.idx == action.payload.idx);
      if (newProduct) {
        newProduct.count -= 1;
      }
    },
    remove: (state, action) => state.filter((product) => product.idx !== action.payload),
  },
});

export const { increase, decrease, remove } = cartSlice.actions;
