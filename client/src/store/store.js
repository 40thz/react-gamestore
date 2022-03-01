import { configureStore } from '@reduxjs/toolkit'
import { catalogApi } from "../services/catalogApi";
import { categoryApi } from "../services/categoryApi";
import { productApi } from "../services/productApi";
import { previewApi } from "../services/previewApi";
import { cartReducer } from './slice/cart.slice'
export const store = configureStore({
  reducer: {
    [catalogApi.reducerPath]: catalogApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [previewApi.reducerPath]: previewApi.reducer,
    cart: cartReducer,
  },
  devTools: true,
});
