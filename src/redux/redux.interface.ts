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

export interface ILocationFilter {
  location: string;
  clicked: boolean;
}

export const productList: IProduct[] = mockData.travelInfo;

const uniquePrices = [...new Set(productList.map((product) => product.price))].sort(
  (a, b) => a - b
);
export const priceSteps = uniquePrices.filter((_, i) => i % 2 == 0);

export type IPrice = {
  min: number;
  max: number;
};
export const maxPrice = Math.max(...uniquePrices);
export const priceStep = priceSteps[0];
