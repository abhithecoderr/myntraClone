import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./itemsSlice";
import bagReducer from './bagSlice'

const myntraStore = configureStore({
  reducer: {
    items: itemsReducer,
    bag: bagReducer
  },
});

export default myntraStore;
