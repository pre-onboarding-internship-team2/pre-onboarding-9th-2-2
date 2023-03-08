import { createSlice } from "@reduxjs/toolkit";
import { savedItemType } from "../../types/Item.type";

interface SavedItemsState {
  savedItems: savedItemType[];
  totalQuantity: number;
  totalAmount: number;
}

const initialState = {
  savedItems: [],
  totalQuantity: 0,
  totalAmount: 0,
} as SavedItemsState;

export const reservationSlice = createSlice({
  name: "rvReducer",
  initialState,
  reducers: {
    addToReserVation(state, action) {
      const findItem = state.savedItems.find(
        (item) => item.idx === action.payload.idx
      );

      if (findItem?.quantity === action.payload.maximumPurchases) {
        findItem ? (findItem.available = false) : null;
        return;
      }

      if (findItem) {
        findItem.quantity += 1;
        findItem.available = true;
      } else {
        const tempItem = { ...action.payload, quantity: 1, available: true };
        state.savedItems.push(tempItem);
      }
    },
  },
});

export const { addToReserVation } = reservationSlice.actions;
