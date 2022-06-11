import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../reducers/menuSlice";

export default configureStore({
  reducer: {
    menu: menuReducer,
  },
});
