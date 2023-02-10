import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: { sidebar: false },
  reducers: {
    toggle(state) {
      state.sidebar = !state.sidebar;
      document.body.classList.toggle("stop-scrolling");
    },
  },
});

export const { toggle } = toggleSlice.actions;
export default toggleSlice.reducer;
