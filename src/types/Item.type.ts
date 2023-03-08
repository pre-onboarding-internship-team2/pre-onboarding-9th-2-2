export type ItemType = {
  idx: number;
  name: string;
  mainImage: string;
  description: string;
  spaceCategory: string;
  price: number;
  maximumPurchases: number;
  registrationDate: string;
};

export type savedItemType = {
  idx: number;
  name: string;
  price: number;
  maximumPurchases: number;
  quantity: number;
  available: boolean;
};

export type toSavedItemType = Pick<
  ItemType,
  "idx" | "name" | "price" | "maximumPurchases"
>;
