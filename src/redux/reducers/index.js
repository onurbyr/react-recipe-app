import menuReducer from "./menuReducer";
import isHomeReducer from "./isHomeReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  menu: menuReducer,
  isHome: isHomeReducer,
});

export default allReducers;
