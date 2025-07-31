import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../assets/items";

const itemsSlice = createSlice({
  name: "items",
  initialState: DEFAULT_ITEMS,
  reducers: {
    addInitialItems: (state, action) => {
      return state;
    },
  },
});

export const itemsActions = itemsSlice.actions;

export default itemsSlice.reducer;
