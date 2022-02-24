import { configureStore } from '@reduxjs/toolkit'
import { catalogApi } from "../services/catalogApi";
import { categoryApi } from "../services/categoryApi";
import { productApi } from "../services/productApi";
export const store = configureStore({
  reducer: {
    [catalogApi.reducerPath]: catalogApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  devTools: true,
});
