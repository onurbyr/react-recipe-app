import { SET_HOME_TRUE, SET_HOME_FALSE } from "../types";

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
