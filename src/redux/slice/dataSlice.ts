import { createSlice, SerializedError } from "@reduxjs/toolkit";
import fetchData from "../function/fetchData";
import { dataState } from "../types";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [] as dataState[],
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
