import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { store } from ".";

export type RootState = ReturnType<typeof store.getState>;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
export interface dataState {
  idx: string;
  name: string;
  mainImage: string;
  description: string;
  spaceCategory: string;
  price: number;
  maximumPurchases: number;
  registrationDate: string;
}

export interface cartState extends dataState {
  count: number;
}
