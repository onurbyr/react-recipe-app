import menuReducer from "./menuReducer";
import isHomeReducer from "./isHomeReducer";
import recipesReducer from "./recipesReducer";
import homeReducer from "./homeReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  menu: menuReducer,
  isHome: isHomeReducer,
  recipes: recipesReducer,
  home: homeReducer
});

export default allReducers;
