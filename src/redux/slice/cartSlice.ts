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
        alert("한도를 초과하였습니다.");
        return;
      }
      if (findData) {
        findData.count += 1;
      } else {
        state.cart.push({ ...action.payload, count: 1 });
      }
    },
  },
});

export const { ADD } = cartSlice.actions;
