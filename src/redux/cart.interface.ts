import mockData from './mock_data.json';

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

export interface ICart extends IProduct {
  count: number;
}

export type CartState = {
  cartProducts: ICart[];
  totalQuant: number;
};

export const shoppingList: IProduct[] = mockData.travelInfo;
