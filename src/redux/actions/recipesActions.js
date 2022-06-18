import * as api from "../../api";
import { GET_CATEGORIES, FILTER_BY_CATEGORY } from "../types";

export const getCategory = () => {
  return async (dispatch) => {
    try {
      const res = await api.recipes.getCategory();
      if (res.categories)
        dispatch({
          type: GET_CATEGORIES,
          payload: res.categories,
        });
    } catch (error) {
      console.warn("ERROR : getCategory : ", error);
    }
  };
};

export const filterByCategory = (params) => {
  return async (dispatch) => {
    try {
      const res = await api.recipes.filterByCategory(params);
      if (res.meals)
        dispatch({
          type: FILTER_BY_CATEGORY,
          payload: res.meals,
        });
    } catch (error) {
      console.warn("ERROR : filterByCategory : ", error);
    }
  };
};
