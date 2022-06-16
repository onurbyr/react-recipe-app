import * as api from "../../api";
import { GET_CATEGORIES } from "../types";

export const getCategory = () => async (dispatch) => {
  try {
    const res = await api.recipes.getCategory();
    if (res.categories)
      dispatch({
        type: GET_CATEGORIES,
        payload: res.categories,
      });
  } catch (error) {
    console.warn("ERROR :: getCategory :: ", error);
  }
};
