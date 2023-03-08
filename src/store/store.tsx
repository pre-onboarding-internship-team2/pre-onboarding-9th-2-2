import { configureStore } from '@reduxjs/toolkit';

import { ActionsTypes, CartActionType, CartState } from './reducers/shopping.interface';
import { shoppingReducer } from './reducers/shopping.reducer';

const store = configureStore({
  reducer: {
    shoppingReducer: shoppingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {shopping: shoppingReducer}
export type AppDispatch = typeof store.dispatch;
export default store;
