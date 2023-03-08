import { createSlice } from "@reduxjs/toolkit";
import { savedItemType } from "../../types/Item.type";

interface SavedItemsState {
  savedItems: savedItemType[];
  totalQuantity: number;
  totalAmount: number;
  status: "succeeded" | "failed";
}

const initialState = {
  savedItems: [],
  totalQuantity: 0,
  totalAmount: 0,
  status: "succeeded",
} as SavedItemsState;

export const reservationSlice = createSlice({
  name: "rvReducer",
  initialState,
  reducers: {
    addToRV(state, action) {
      const findItem = state.savedItems.find(
        (item) => item.idx === action.payload.idx
      );

      if (findItem?.quantity === action.payload.maximumPurchases) {
        state.status = "failed";
        return;
      }

      if (findItem) {
        findItem.quantity += 1;
        state.status = "succeeded";
      } else {
        const tempItem = { ...action.payload, quantity: 1 };
        state.savedItems.push(tempItem);
        state.status = "succeeded";
      }
    },
  },
});

export const { addToRV } = reservationSlice.actions;
