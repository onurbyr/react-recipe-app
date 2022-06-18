import {
  FILTER_BY_CATEGORY,
  GET_CATEGORIES_AND_FILTER_BY_FIRST_CATEGORY,
} from "../types";

const initialState = {
  filteredMealsByCategory: [],
  categoriesAndFilteredMealsByFirstCategory: [],
  loading: true,
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_CATEGORY:
      return {
        ...state,
        filteredMealsByCategory: action.payload,
        loading: false,
      };
    case GET_CATEGORIES_AND_FILTER_BY_FIRST_CATEGORY:
      return {
        ...state,
        categoriesAndFilteredMealsByFirstCategory: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default recipesReducer;
