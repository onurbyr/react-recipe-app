import { GET_RANDOM_CATEGORIES, SET_HOME_TRUE, SET_HOME_FALSE } from "../types";

const initialState = {
  isHome: false,
  randomCategories: [],
  loading: true,
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOME_TRUE:
      return {
        ...state,
        isHome: true,
      };
    case SET_HOME_FALSE:
      return {
        ...state,
        isHome: false,
      };
    case GET_RANDOM_CATEGORIES:
      return {
        ...state,
        randomCategories: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default recipesReducer;
