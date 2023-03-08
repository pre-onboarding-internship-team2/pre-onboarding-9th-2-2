import { Product } from "@/services/product";

let store: Product[] = [];

export const reservationStorage = {
  get: () => store.slice(),
  set: (newProduct: Product) => {
    const isIncluded = store.some(({ idx }) => newProduct.idx === idx);
    if (isIncluded) return false;
    store = [...store, newProduct];
    return true;
  },
  remove: (targetProduct: Product) => {
    const isIncluded = store.some(({ idx }) => targetProduct.idx === idx);
    if (!isIncluded) return false;
    store = store.filter(({ idx }) => targetProduct.idx !== idx);
    return true;
  },
  include: (targetProduct: Product) => {
    return store.some(({ idx }) => targetProduct.idx === idx);
  },
};
