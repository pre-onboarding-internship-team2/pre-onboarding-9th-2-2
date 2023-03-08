import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchData = createAsyncThunk("data/fetchData", async () => {
  try {
    const result = await axios.get(
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f1be87a4-38e1-4c1e-a527-bd4775812374/mock_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230308T104500Z&X-Amz-Expires=86400&X-Amz-Signature=3a1793eb93198781e4201ce082ce14c14a5e0e3f62e92d276b7632a7607b3feb&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22mock_data.json%22&x-id=GetObject"
    );
    return result.data;
  } catch (error: any) {
    return error.message;
  }
});

export default fetchData;
