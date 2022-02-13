import { configureStore } from "@reduxjs/toolkit";
import goalsReducer from "./goalsSlice";

export const store = configureStore({
  reducer: {
    goalsState: goalsReducer,
  },
});
