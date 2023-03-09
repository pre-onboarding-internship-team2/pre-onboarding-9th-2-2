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
    const response = await axios.get('./data/mock_data.json');
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
