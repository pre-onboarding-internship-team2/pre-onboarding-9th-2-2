import { createSlice } from '@reduxjs/toolkit';

import { CartState, ICart } from '../cart.interface';

export const cartSlice = createSlice({
  name: 'cartReducer',
  initialState: {
    cartProducts: [] as ICart[],
    totalQuant: 0,
  } as CartState,
  reducers: {
    add: (state, action) => {
      const newProduct = state.cartProducts.find((product) => product.idx == action.payload.idx);
      if (newProduct) {
        newProduct.count += 1;
      } else {
        state.cartProducts.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalQuant += 1;
    },
  },
});

export const { add } = cartSlice.actions;
