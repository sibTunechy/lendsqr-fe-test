import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: "General Details",
};



const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    handleToggleChange: (state, action) => {
      state.toggle = action.payload;
    },
  },
});

export const {handleToggleChange}   = toggleSlice.actions

export default toggleSlice.reducer 