import { configureStore } from '@reduxjs/toolkit'
//import {composeWithDevTools} from 'remote-redux-devtools'
import catalogSlice from '../features/catalog/catalogSlice'
import categorySlice from '../features/category/categorySlice'
import productSlice from '../features/product/productSlice'

export const store = configureStore({
  reducer: {
    catalog: catalogSlice,
    category: categorySlice,
    product: productSlice
  },
  devTools: true
})

export default store
