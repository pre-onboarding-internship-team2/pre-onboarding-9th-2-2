import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProductType } from 'components/product/PtoductItem.Type';

interface ReservationState {
  ReservationList?: ProductType[] | null;

  addLoading: 'idle' | 'pending' | 'succeeded' | 'failed';
  addError: string | null;

  getLoading: 'idle' | 'pending' | 'succeeded' | 'failed';
  getError: string | null;

  deleteLoading: 'idle' | 'pending' | 'succeeded' | 'failed';
  deleteError: string | null;
}

const initialState: ReservationState = {
  ReservationList: null,

  addLoading: 'idle',
  addError: null,

  getLoading: 'idle',
  getError: null,

  deleteLoading: 'idle',
  deleteError: null,
};

export const getReservation = createAsyncThunk('reservation/GET_RESERVATION', () => {
  try {
    let reservationData = JSON.parse(localStorage.getItem('reservations')!);
    return reservationData;
  } catch (err: any) {
    throw new Error(err);
  }
});

export const addReservation = createAsyncThunk(
  'reservation/ADD_RESERVATION',
  async (product: ProductType) => {
    try {
      let reservationData = JSON.parse(localStorage.getItem('reservations')!);

      if (!reservationData) {
        reservationData = [];
      }

      let newReservationList = [...reservationData, product];
      localStorage.setItem('reservations', JSON.stringify(newReservationList));

      return newReservationList;
    } catch (err: any) {
      throw new Error(err);
    }
  }
);

// export const deleteReservation = createAsyncThunk(
//   'reservation/DELETE_RESERVATION',
//   async (product: ProductType) => {
//     try {
//       let reservationData = JSON.parse(localStorage.getItem('reservations')!);
//       const deleteReservationList = reservationData.filter((item: any) => item.idx !== product.idx);
//       localStorage.setItem('reservations', JSON.stringify(deleteReservationList));
//       return deleteReservationList;
//     } catch (err: any) {
//       throw new Error(err);
//     }
//   }
// );

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReservation.pending, (state) => {
        state.getError = null;
        state.getLoading = 'pending';
      })
      .addCase(getReservation.fulfilled, (state, action) => {
        state.getError = null;
        state.getLoading = 'succeeded';

        state.ReservationList = action.payload;
      })
      .addCase(getReservation.rejected, (state, action) => {
        state.getError = action.payload as string;
        state.getLoading = 'failed';
      });
    builder
      .addCase(addReservation.pending, (state) => {
        state.addError = null;
        state.addLoading = 'pending';
      })
      .addCase(addReservation.fulfilled, (state, action) => {
        state.addError = null;
        state.addLoading = 'succeeded';

        state.ReservationList = action.payload;
      })
      .addCase(addReservation.rejected, (state, action) => {
        state.addError = action.payload as string;
        state.addLoading = 'failed';
      });
    // builder
    //   .addCase(deleteReservation.pending, (state) => {
    //     state.deleteError = null;
    //     state.deleteLoading = 'pending';
    //   })
    //   .addCase(deleteReservation.fulfilled, (state, action) => {
    //     state.deleteError = null;
    //     state.deleteLoading = 'succeeded';

    //     state.ReservationList = action.payload;
    //   })
    //   .addCase(deleteReservation.rejected, (state, action) => {
    //     state.deleteError = action.payload as string;
    //     state.deleteLoading = 'failed';
    //   });
  },
});
