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
};

export interface ItemsState {
  items: [];
  status: "pending" | "succeeded" | "failed";
}

export interface SavedItemsState {
  savedItems: ItemType[];
  totalQuantity: number;
  totalAmount: number;
}
