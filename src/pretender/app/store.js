import { configureStore } from "@reduxjs/toolkit";
import shipReducer from "./ShipSlice";

export default configureStore({
  reducer: {
    ship: shipReducer,
  },
});
