import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    value: false,
  },
  reducers: {
    setIsMenuActive: (state) => {
      state.value = !state.value;
    },
  },
});

export const { setIsMenuActive } = menuSlice.actions;

export default menuSlice.reducer;
