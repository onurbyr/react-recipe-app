import menuReducer from "./menuReducer";
import isHomeReducer from "./isHomeReducer";
import recipesReducer from "./recipesReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  menu: menuReducer,
  isHome: isHomeReducer,
  recipes: recipesReducer,
});

export default allReducers;
