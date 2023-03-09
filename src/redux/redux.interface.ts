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

export interface FilterSpace {
  space: string;
  clicked: boolean;
}

export const productList: IProduct[] = mockData.travelInfo;
