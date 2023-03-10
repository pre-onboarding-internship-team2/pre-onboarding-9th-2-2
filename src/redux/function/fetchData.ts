import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchData = createAsyncThunk("data/fetchData", async () => {
  try {
    const result = await axios.get("/mock_data.json");
    return result.data;
  } catch (error: any) {
    return error.message;
  }
});

export default fetchData;
