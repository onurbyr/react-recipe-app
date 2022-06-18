import { GET_CATEGORIES, FILTER_BY_CATEGORY } from "../types";

const initialState = {
  categories: [],
  filteredMealsByCategory: [],
  loading: true,
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case FILTER_BY_CATEGORY:
      return {
        ...state,
        filteredMealsByCategory: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default recipesReducer;
