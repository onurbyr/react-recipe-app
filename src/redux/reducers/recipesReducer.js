import {
  FILTER_BY_CATEGORY,
  GET_CATEGORIES_AND_FILTER_BY_FIRST_CATEGORY,
} from "../types";

const initialState = {
  //categories: [],
  filteredMealsByCategory: [],
  categoriesAndFilteredMealsByFirstCategory: [],
  loading: true,
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    // case GET_CATEGORIES:
    //   return {
    //     ...state,
    //     categories: action.payload,
    //     loading: false,
    //   };
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
