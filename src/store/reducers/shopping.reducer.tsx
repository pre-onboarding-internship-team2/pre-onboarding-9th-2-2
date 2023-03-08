import { AnyAction, createAction, createReducer } from '@reduxjs/toolkit';

import mockData from './mock_data.json';
import { ActionsTypes, CartActionType, CartState, ICart, IProduct } from './shopping.interface';

export const cartInitState: CartState = {
  cart: [],
  totalQuant: 0,
};

export const shoppingList: IProduct[] = mockData.travelInfo;

// export const shoppingReducer = (
//   state: CartState,
//   action: CartActionType | AnyAction
// ): CartState => {
//   const { type, payload } = action;

//   switch (type) {
//     case ActionsTypes.ADD_TO_CART:
//       const itemIndex = state.cart.findIndex((product) => product.product.idx == payload);
//       if (itemIndex !== -1) {
//         return {
//           ...state,
//           cart: state.cart.map((product, index) => ({
//             ...product,
//             count: product.count + (itemIndex === index ? 1 : 0),
//           })),
//           totalQuant: state.totalQuant + 1,
//         };
//       } else {
//         const newItem = shoppingList.find((product) => product.idx == payload)!;
//         return {
//           ...state,
//           cart: [
//             ...state.cart,
//             {
//               count: 1,
//               product: newItem,
//             },
//           ],
//           totalQuant: state.totalQuant + 1,
//         };
//       }

//     default:
//       return state;
//   }
// };

export const shoppingReducer = createReducer(cartInitState, {
  [ActionsTypes.ADD_TO_CART]: (state, action) => {
    const itemIndex = state.cart.findIndex((product) => product.product.idx == action.payload);
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
      const newItem = shoppingList.find((product) => product.idx == action.payload)!;
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
  },
});
