import { createSlice, SerializedError } from "@reduxjs/toolkit";
import fetchData from "./function/fetchData";

interface initialState {
  idx: string;
  name: string;
  mainImage: string;
  description: string;
  spaceCategory: string;
  price: string;
  maximumPurchases: string;
  registrationDate: string;
}

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [] as initialState[],
    isLoading: false,
    error: null as null | SerializedError,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      }),
      builder.addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});
