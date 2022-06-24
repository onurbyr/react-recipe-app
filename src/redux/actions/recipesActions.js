import * as api from "../../api";
import {
  FILTER_BY_CATEGORY,
  GET_CATEGORIES_AND_FILTER_BY_FIRST_CATEGORY,
  RESET_RECIPES_REDUCER,
  SET_LOADING_TRUE,
  GET_DETAILS,
} from "../types";

export const filterByCategory = (params) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_LOADING_TRUE });
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

export const getCategoriesAndfilterByFirstCategory = () => {
  return async (dispatch) => {
    try {
      const res = await api.recipes.getCategoriesAndfilterByFirstCategory();
      if (res.categories && res.filteredByFirstCategory)
        dispatch({
          type: GET_CATEGORIES_AND_FILTER_BY_FIRST_CATEGORY,
          payload: res,
        });
    } catch (error) {
      console.warn("ERROR : getCategoriesAndfilterByFirstCategory : ", error);
    }
  };
};

export const resetRecipesReducer = () => {
  return {
    type: RESET_RECIPES_REDUCER,
  };
};

export const getDetails = (params) => {
  return async (dispatch) => {
    try {
      const res = await api.recipes.getDetails(params);
      if (res.meals)
        dispatch({
          type: GET_DETAILS,
          payload: res.meals[0],
        });
    } catch (error) {
      console.warn("ERROR : getDetails : ", error);
    }
  };
};
