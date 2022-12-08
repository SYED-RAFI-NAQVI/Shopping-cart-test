import { configureStore } from "@reduxjs/toolkit";
import { productsCartReducer } from "./productsCartSlice";

export const store = configureStore({
  reducer: productsCartReducer,
});
