import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  status: null,
};
const reservations = createSlice({
  name: "rvReducer",
  initialState,
  reducers: {},
});

export default reservations.reducer;
