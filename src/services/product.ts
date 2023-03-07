import axios from "axios";

export const fetchGetProduct = async () => {
  return axios.get<GetProductResponse>(
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f1be87a4-38e1-4c1e-a527-bd4775812374/mock_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230307T170051Z&X-Amz-Expires=86400&X-Amz-Signature=4aed64020491e66497229cb698a732a66fba089cdcf071a2e397bb13a98366c8&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22mock_data.json%22&x-id=GetObject"
  );
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
