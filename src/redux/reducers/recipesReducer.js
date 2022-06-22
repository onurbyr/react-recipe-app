import {
  FILTER_BY_CATEGORY,
  GET_CATEGORIES_AND_FILTER_BY_FIRST_CATEGORY,
  RESET_RECIPES_REDUCER,
  SET_LOADING_TRUE,
} from "../types";

const initialState = {
  filteredMealsByCategory: [],
  categoriesAndFilteredMealsByFirstCategory: [],
  filteredMealsByCategoryLoading: false,
  categoriesAndFilteredMealsByFirstCategoryloading: true,
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_CATEGORY:
      return {
        ...state,
        filteredMealsByCategory: action.payload,
        filteredMealsByCategoryLoading: false,
      };
    case GET_CATEGORIES_AND_FILTER_BY_FIRST_CATEGORY:
      return {
        ...state,
        categoriesAndFilteredMealsByFirstCategory: action.payload,
        categoriesAndFilteredMealsByFirstCategoryloading: false,
      };
    case RESET_RECIPES_REDUCER:
      return {
        ...initialState,
      };
    case SET_LOADING_TRUE:
      return {
        ...state,
        filteredMealsByCategoryLoading: true,
      };
    default:
      return state;
  }
};

export default recipesReducer;
