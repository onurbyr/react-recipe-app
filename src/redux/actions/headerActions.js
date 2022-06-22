import * as api from "../../api";
import { GET_SEARCH, SET_MENU_ACTIVE } from "../types";

export const setIsMenuActive = () => {
  return {
    type: SET_MENU_ACTIVE,
  };
};

export const getSearch = (params) => {
  return async (dispatch) => {
    try {
      const res = await api.header.search({ s: params });
      if (res.meals)
        dispatch({
          type: GET_SEARCH,
          payload: res.meals,
        });
    } catch (error) {
      console.warn("ERROR : getSearch : ", error);
    }
  };
};
