import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import mockData from "../../data/mockData.json";

interface ItemsState {
  items: [];
  status: "pending" | "succeeded" | "failed";
}

const initialState = {
  items: [],
  status: "pending",
} as ItemsState;

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const data = JSON.parse(JSON.stringify(mockData));
  return data;
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
