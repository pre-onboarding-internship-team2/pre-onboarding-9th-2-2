import mockData from './mock_data.json';
import { ActionsTypes, CartActionType, ShoppingInitialState, State } from './shopping.interface';

export const shoppingInitState: ShoppingInitialState = {
  products: mockData.travelInfo,
  cart: [],
  totalQuant: 0,
};

export const shoppingReducer = (state: ShoppingInitialState, action: CartActionType): State => {
  const { type, payload } = action;

  switch (type) {
    case ActionsTypes.ADD_TO_CART:
      const itemIndex = state.cart.findIndex((product) => product.product.idx == payload);
      if (itemIndex !== -1) {
        return {
          ...state,
          cart: state.cart.map((product, index) => ({
            ...product,
            count: product.count + (itemIndex === index ? 1 : 0),
          })),
          totalQuant: state.totalQuant + 1,
        };
      } else {
        const newItem = state.products.find((product) => product.idx == payload)!;
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              count: 1,
              product: newItem,
            },
          ],
          totalQuant: state.totalQuant + 1,
        };
      }

    default:
      return state;
  }
};
