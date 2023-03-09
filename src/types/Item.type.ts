export type ItemType = {
  idx: number;
  name: string;
  mainImage: string;
  description: string;
  spaceCategory: string;
  price: number;
  maximumPurchases: number;
  registrationDate: string;
  quantity: number;
  // available: boolean;
};

export type savedItemType = {
  item: ItemType;
  quantity: number;
};
