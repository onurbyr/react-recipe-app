import * as api from "../../api";
import { GET_RANDOM_CATEGORIES, SET_HOME_TRUE, SET_HOME_FALSE } from "../types";

export const setIsHomeTrue = () => {
  return {
    type: SET_HOME_TRUE,
  };
};

export const setIsHomeFalse = () => {
  return {
    type: SET_HOME_FALSE,
  };
};

export const getRandomCategories = () => {
  return async (dispatch) => {
    try {
      const res = await api.recipes.getCategory();
      let randomCategories = [];
      if (res) {
        const getRandomCategory = () => {
          return res.categories[
            Math.floor(Math.random() * res.categories.length)
          ];
        };

        for (let index = 0; index < 3; ) {
          let newItem = getRandomCategory();
          if (
            randomCategories.some((e) => e.idCategory == newItem.idCategory)
          ) {
          } else {
            randomCategories.push(newItem);
            index++;
          }
        }
      }

      if (randomCategories.length)
        dispatch({
          type: GET_RANDOM_CATEGORIES,
          payload: randomCategories,
        });
    } catch (error) {
      console.warn("ERROR : getRandomCategories : ", error);
    }
  };
};
