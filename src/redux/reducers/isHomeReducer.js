const isHomeReducer = (state = false, action) => {
  switch (action.type) {
    case "SET_HOME_TRUE":
      return true;
    case "SET_HOME_FALSE":
      return false;
    default:
      return state;
  }
};

export default isHomeReducer;
