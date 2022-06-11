import menuReducer from "./menuReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  menu: menuReducer,
});

export default allReducers;
