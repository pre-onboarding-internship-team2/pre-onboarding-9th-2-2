import mockData from '../mock_data.json';

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

export interface ICart {
  product: IProduct;
  count: number;
}

export type CartState = {
  cart: ICart[];
  totalQuant: number;
};

// types of actions in the reducer
export enum ActionsTypes {
  ADD_TO_CART = 'ADD_TO_CART',
}
export type CartActionType = {
  type: ActionsTypes;
  payload: ICart;
};

export const shoppingList: IProduct[] = mockData.travelInfo;
