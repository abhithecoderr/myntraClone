import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./itemsSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

export default myntraStore;
