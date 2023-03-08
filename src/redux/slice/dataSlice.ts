import { createSlice, SerializedError } from "@reduxjs/toolkit";
import fetchData from "../function/fetchData";
import { dataState } from "../types";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [] as dataState[],
    status: "",
    error: null as null | SerializedError,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.status = "loading";
    }),
      builder.addCase(fetchData.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      }),
      builder.addCase(fetchData.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error;
      });
  },
});
