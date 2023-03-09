import { createSlice } from '@reduxjs/toolkit';

import { productList } from '../redux.interface';

const spaceCategory = [...new Set(productList.map((product) => product.spaceCategory))] as const;

export const productSlice = createSlice({
  name: 'productReducer',
  initialState: {
    products: productList,
    spaceFilter: spaceCategory.map((a) => ({ ['space']: a, ['clicked']: true })),
  },
  reducers: {
    space: (state, action) => {
      console.log(action.payload.target);
      console.log(action.payload.clicked);
      return {
        ...state,
        spaceFilter: state.spaceFilter.map((spaceObj) =>
          spaceObj.space == action.payload.target
            ? { ...spaceObj, clicked: action.payload.clicked }
            : spaceObj
        ),
      };
    },
  },
});

export const { space } = productSlice.actions;
