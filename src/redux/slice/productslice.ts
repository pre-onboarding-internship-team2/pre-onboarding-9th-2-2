import { createSlice } from '@reduxjs/toolkit';

import { productList } from '../redux.interface';

export const productSlice = createSlice({
  name: 'productReducer',
  initialState: productList,
  reducers: {
    setLocation: (state, action) => {
      return productList.filter((product) => action.payload.includes(product.spaceCategory));
    },
    setPrice: (state, action) => {
      console.log(action.payload);
      return productList.filter(
        (product) => product.price >= action.payload.min && product.price <= action.payload.max
      );
    },
  },
});

export const { setLocation, setPrice } = productSlice.actions;
