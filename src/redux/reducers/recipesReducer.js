import { GET_CATEGORIES } from "../types";

const initialState = {
  categories: [],
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
    default:
      return state;
  }
};

export default recipesReducer;
