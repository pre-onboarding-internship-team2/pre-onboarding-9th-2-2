import axios from "axios";
import { Product } from "./product";

export const fetchGetReserve = async () => {
  return axios.get<ReserveProps[]>("/api/reserve");
};

export const fetchPostReserve = async (
  props: Omit<ReserveProps, "reserveDate">
) => {
  return axios.post("/api/reserve", props);
};

export const fetchPutReserve = async ({
  idx,
  props,
}: {
  idx: number;
  props: Partial<ReserveProps>;
}) => {
  return axios.put(`/api/reserve/?idx=${idx}`, props);
};

export const fetchDeleteReserve = async (idx: number) => {
  return axios.delete(`/api/reserve/?idx=${idx}`);
};

export type ReserveProps = {
  productInfo: Product;
  quantity: number;
  reserveDate: Date;
};
