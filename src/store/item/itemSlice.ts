import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface UsersState {
  items: [];
  status: "pending" | "succeeded" | "failed";
}

const initialState = {
  items: [],
  status: "pending",
} as UsersState;

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const response = await axios({
    method: "get",
    url: import.meta.env.VITE_APP_API,
    responseType: "json",
  });

  return response?.data;
});

export const itemSlice = createSlice({
  name: "itemReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});
