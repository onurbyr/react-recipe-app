import menuReducer from "./menuReducer";
import recipesReducer from "./recipesReducer";
import homeReducer from "./homeReducer";
import headerReducer from "./headerReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  menu: menuReducer,
  recipes: recipesReducer,
  home: homeReducer,
  header: headerReducer,
});

export default allReducers;
