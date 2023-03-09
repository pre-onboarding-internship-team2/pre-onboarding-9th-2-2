import { createSlice } from "@reduxjs/toolkit";
import { ItemType } from "../../types/Item.type";

interface SavedItemsState {
  savedItems: ItemType[];
  totalQuantity: number;
  totalAmount: number;
}

const initialState = {
  savedItems: localStorage.getItem("savedItems")
    ? JSON.parse(localStorage.getItem("savedItems")!)
    : [],
  totalQuantity: 0,
  totalAmount: 0,
} as SavedItemsState;

export const reservationSlice = createSlice({
  name: "rvReducer",
  initialState,
  reducers: {
    getSavedItems(state, action) {
      const savedItem = localStorage.getItem("savedItems");
      if (savedItem) {
        state.savedItems = JSON.parse(savedItem);
      } else {
        return;
      }
    },
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
      localStorage.setItem("savedItems", JSON.stringify(state.savedItems));
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
      localStorage.setItem("savedItems", JSON.stringify(state.savedItems));
    },
    removeFromReserVation(state, action) {
      const newSavedItems = state.savedItems.filter(
        (item) => item.idx !== action.payload.idx
      );
      state.savedItems = newSavedItems;
      localStorage.setItem("savedItems", JSON.stringify(state.savedItems));
    },
    clearReservations(state, action) {
      state.savedItems = [];
      localStorage.setItem("savedItems", JSON.stringify(state.savedItems));
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
  getSavedItems,
  addToReserVation,
  subtractReserVation,
  removeFromReserVation,
  clearReservations,
  getTotalPrice,
} = reservationSlice.actions;
