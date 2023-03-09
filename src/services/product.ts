import axios from "axios";

export const fetchGetProduct = async () => {
  return axios.get<GetProductResponse>("/api/product");
};

export type GetProductResponse = Product[];

export type Product = {
  idx: number;
  name: string;
  mainImage: string;
  description: string;
  spaceCategory: SpaceCategory;
  price: number;
  maximumPurchases: number;
  registrationDate: Date;
};

export const SpaceCategories = [
  "강원",
  "서울",
  "부산",
  "대구",
  "제주",
] as const;

export type SpaceCategory = typeof SpaceCategories[number];
