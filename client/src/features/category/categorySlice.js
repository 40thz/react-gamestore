import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  categoryItems: [],
  isLoading: true
}

export const getCategory = createAsyncThunk('category/getCategory', async (id, { rejectWithValue, dispatch }) => {
  console.log(id)
  axios.get(`http://localhost:5000/api/category/${id}`).then(resp => dispatch(setCategory(resp.data)))
})

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.categoryItems = action.payload
    }
  }
})

export const { setCategory } = categorySlice.actions
export default categorySlice.reducer
