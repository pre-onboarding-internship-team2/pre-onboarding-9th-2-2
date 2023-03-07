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
    addToRV(state, action) {
      const itemIdx = state.savedItems.findIndex(
        (item) => item.idx === action.payload.idx
      );

      if (itemIdx >= 0) {
        state.savedItems[itemIdx].quantity += 1;
      } else {
        const tempItem = { ...action.payload, quantity: 1 };
        state.savedItems.push(tempItem);
      }
    },
  },
});

export const { addToRV } = reservationSlice.actions;
