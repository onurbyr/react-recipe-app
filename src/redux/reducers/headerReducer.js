import { GET_SEARCH } from "../types";

const initialState = {
  search: "",
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default headerReducer;
