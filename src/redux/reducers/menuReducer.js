import { SET_MENU_ACTIVE } from "../types";

const menuReducer = (state = false, action) => {
  switch (action.type) {
    case SET_MENU_ACTIVE:
      return !state;
    default:
      return state;
  }
};

export default menuReducer;
