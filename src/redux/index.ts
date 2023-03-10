import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./slice/cartSlice";
import { dataSlice } from "./slice/dataSlice";

export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    cart: cartSlice.reducer,
  },
});
