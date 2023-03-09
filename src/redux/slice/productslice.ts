import { createSlice } from '@reduxjs/toolkit';

import { ILocationFilter, IPrice, maxPrice, productList } from '../redux.interface';

const locationCategory = [...new Set(productList.map((product) => product.spaceCategory))] as const;

export const productSlice = createSlice({
  name: 'productReducer',
  initialState: {
    products: productList,
    locationFilter: locationCategory.map((a) => ({
      ['location']: a,
      ['clicked']: true,
    })) as ILocationFilter[],
    priceFilter: { min: 0, max: maxPrice } as IPrice,
  },
  reducers: {
    location: (state, action) => {
      return {
        ...state,
        locationFilter: state.locationFilter.map((locationObj) =>
          locationObj.location == action.payload.target
            ? { ...locationObj, clicked: action.payload.clicked }
            : locationObj
        ),
      };
    },
    price: (state, action) => {
      console.log(action.payload[0]);
      console.log(action.payload[1]);
      return {
        ...state,
        priceFilter: {
          min: action.payload[0],
          max: action.payload[1],
        },
      };
    },
  },
});

export const { location, price } = productSlice.actions;
