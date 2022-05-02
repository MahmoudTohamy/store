/** @format */

import dataReducer from "./data";
import cartReducer from "./cart";
import { combineReducers } from "redux";
export const allReducers = combineReducers({
  data: dataReducer,
  cart: cartReducer,
});
