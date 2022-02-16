import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  productItems: [],
  isLoading: true
}

export const getProduct = createAsyncThunk('category/getProduct', async (id, { rejectWithValue, dispatch }) => {
  console.log(id)
  axios.get(`http://localhost:5000/api/product/${id}`).then(resp => dispatch(setProduct(resp.data)))
})

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.productItems = action.payload
    }
  }
})

export const { setProduct } = productSlice.actions
export default productSlice.reducer
