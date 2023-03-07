export type SpaceCategory = "서울" | "강원" | "부산" | "대구" | "제주";

export type TravelItem = {
  idx: number;
  name: string;
  mainImage: string;
  description: string;
  spaceCategory: SpaceCategory;
  price: number;
  maximumPurchases: number;
  registrationDate: Date | string;
};
