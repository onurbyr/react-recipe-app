import { GET_SEARCH, SET_MENU_ACTIVE } from "../types";

const initialState = {
  isMenuActive: false,
  search: "",
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU_ACTIVE:
      return {
        ...state,
        isMenuActive: !state.isMenuActive,
      };
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
