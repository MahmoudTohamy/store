/** @format */
import { dataConstant } from "../Constant";
let initialState = {
  currencies: [],
  categories: [],
  selectedCurrency: { label: "USD", symbol: "$", __typename: "Currency" },
  selectedCategory: {},
  categoriesNames: [],
  selectedProduct: {},
};
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case dataConstant.GET_MERCHANDISE: {
      return { ...state, categories: action.data };
    }
    case dataConstant.GET_CURRENCIES: {
      return { ...state, currencies: action.data };
    }
    case dataConstant.SELECT_CATEGORY: {
      return { ...state, selectedCategory: action.data };
    }
    case dataConstant.SELECT_CURRENCY: {
      return { ...state, selectedCurrency: action.data };
    }
    case dataConstant.GET_CATEGORIES_NAMES: {
      return { ...state, categoriesNames: action.data };
    }
    case dataConstant.SELECT_PRODUCT: {
      return { ...state, selectedProduct: action.data };
    }
    default:
      return state;
  }
};
export default dataReducer;
