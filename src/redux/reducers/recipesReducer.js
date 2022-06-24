import {
  FILTER_BY_CATEGORY,
  GET_CATEGORIES_AND_FILTER_BY_FIRST_CATEGORY,
  RESET_RECIPES_REDUCER,
  SET_LOADING_TRUE,
  GET_DETAILS,
} from "../types";

const initialState = {
  filteredMealsByCategory: [],
  categoriesAndFilteredMealsByFirstCategory: [],
  filteredMealsByCategoryLoading: false,
  categoriesAndFilteredMealsByFirstCategoryloading: true,
  selectedItemLoading: true,
  selectedItem: null,
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
    case GET_DETAILS:
      return {
        ...state,
        selectedItem: action.payload,
        selectedItemLoading: false,
      };
    default:
      return state;
  }
};

export default recipesReducer;
