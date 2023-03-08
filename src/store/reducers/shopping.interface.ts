// types of actions in the reducer
export enum ActionsTypes {
  ADD_TO_CART = 'ADD_TO_CART',
}
export type CartActionType = {
  type: ActionsTypes;
  payload: number;
};

export type State = {
  cart: ICart[];
  products: IProduct[];
  totalQuant: number;
};
export interface shoppingReducer {
  type: ActionsTypes;
  payload: number;
}
export interface ShoppingInitialState {
  cart: Array<ICart>;
  products: Array<IProduct>;
  totalQuant: number;
}

export interface ICart {
  product: IProduct;
  count: number;
}

export interface IProduct {
  idx: number;
  name: string;
  mainImage: string;
  description: string;
  spaceCategory: string;
  price: number;
  maximumPurchases: number;
  registrationDate: string;
}
