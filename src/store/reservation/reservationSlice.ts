import { createSlice } from "@reduxjs/toolkit";
import { ItemType } from "../../types/Item.type";

interface SavedItemsState {
  savedItems: ItemType[];
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
        return;
      }

      if (findItem) {
        findItem.quantity += 1;
      } else {
        const tempItem = { ...action.payload, quantity: 1 };
        state.savedItems.push(tempItem);
      }
    },
    subtractReserVation(state, action) {
      const findItem = state.savedItems.find(
        (item) => item.idx === action.payload.idx
      );
      if (findItem?.quantity === 1) {
        return;
      }
      if (findItem) {
        findItem.quantity -= 1;
      }
    },
    removeFromReserVation(state, action) {
      const newSavedItems = state.savedItems.filter(
        (item) => item.idx !== action.payload.idx
      );
      state.savedItems = newSavedItems;
    },
    clearReservations(state, action) {
      state.savedItems = [];
    },
    getTotalPrice(state, action) {
      let { total, quantity } = state.savedItems.reduce(
        (savedItemTotal, savedItem) => {
          const { price, quantity } = savedItem;
          const itemTotal = price * quantity;

          savedItemTotal.total += itemTotal;
          savedItemTotal.quantity += quantity;

          return savedItemTotal;
        },
        { total: 0, quantity: 0 }
      );

      state.totalQuantity = quantity;
      state.totalAmount = total;
    },
  },
});

export const {
  addToReserVation,
  subtractReserVation,
  removeFromReserVation,
  clearReservations,
  getTotalPrice,
} = reservationSlice.actions;
