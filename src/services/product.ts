import axios from "axios";

export const fetchGetProduct = async () => {
  return axios.get<GetProductResponse>("/api/product");
};

export type Product = {
  idx: number;
  name: string;
  mainImage: string;
  description: string;
  spaceCategory: string;
  price: number;
  maximumPurchases: number;
  registrationDate: Date;
};

export type GetProductResponse = Product[];
