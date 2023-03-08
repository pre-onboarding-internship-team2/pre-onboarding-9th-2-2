import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ProductType } from 'components/product/PtoductItem.Type';

// 초기 상태 타입
interface ProductState {
  productsList?: ProductType;
  getLoading: 'idle' | 'pending' | 'succeeded' | 'failed';
  getError: string | null;
}

// 초기 상태
const initialState: ProductState = {
  productsList: undefined,
  getLoading: 'idle',
  getError: null,
};

export const getProducts = createAsyncThunk('product/GET_PRODUCTS', async () => {
  try {
    const response = await axios.get(
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f1be87a4-38e1-4c1e-a527-bd4775812374/mock_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230308T054321Z&X-Amz-Expires=86400&X-Amz-Signature=97ef73f7b7a9dfe6eaa97bb222f562a5e95d2bf1051b60072c1407d7c639b02e&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22mock_data.json%22&x-id=GetObject'
    );
    return response.data
  } catch (err: any) {
    throw new Error(err);
  }
});

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 대기중
      .addCase(getProducts.pending, (state) => {
        state.getError = null;
        state.getLoading = 'pending';
      })
      // 성공
      .addCase(getProducts.fulfilled, (state, action) => {
        state.getError = null;
        state.getLoading = 'succeeded';

        state.productsList = action.payload;
      })
      // 거절
      .addCase(getProducts.rejected, (state, action) => {
        state.getError = action.payload as string;
        state.getLoading = 'failed';
      });
  },
});
