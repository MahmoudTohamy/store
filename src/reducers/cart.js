/** @format */

import { cartConstant } from "../Constant";

let initialState = {
  cart: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartConstant.ADJUST_PRODUCT: {
      return { ...state, cart: action.data };
    }
    default:
      return state;
  }
};
export default cartReducer;
