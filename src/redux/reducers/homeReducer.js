import { GET_RANDOM_CATEGORIES } from "../types";

const initialState = {
  randomCategories: [],
  loading: true,
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
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
