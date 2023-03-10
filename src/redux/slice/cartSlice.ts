import { createSlice } from "@reduxjs/toolkit";
import { cartState } from "../types";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [] as cartState[],
  },
  reducers: {
    ADD: (state, action) => {
      const findData = state.cart.find(
        (product: cartState) => product.idx === action.payload.idx
      );
      if (findData?.count === action.payload.maximumPurchases) {
        return;
      }
      if (findData) {
        findData.count += 1;
      } else {
        state.cart.push({ ...action.payload, count: 1 });
      }
    },
    REMOVE: (state, action) => {
      const findData = state.cart.find(
        (product: cartState) => product.idx === action.payload.idx
      );
      if (findData?.count === 1) {
        state.cart = state.cart.filter(
          (product: cartState) => product.idx !== findData.idx
        );
      } else if (findData && findData.count > 1) {
        findData.count -= 1;
      }
    },
    DELETE: (state, action) => {
      const findData = state.cart.find(
        (product: cartState) => product.idx === action.payload.idx
      );
      state.cart = state.cart.filter(
        (product: cartState) => product.idx !== findData?.idx
      );
    },
  },
});

export const { ADD, REMOVE, DELETE } = cartSlice.actions;
