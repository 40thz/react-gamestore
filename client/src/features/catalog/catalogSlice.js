import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  catalogItems: [],
  isLoading: true
}

export const getCatalog = createAsyncThunk('catalog/getCatalog', async (_, { rejectWithValue, dispatch }) => {
  axios.get('http://localhost:5000/api/catalog').then(resp => dispatch(setCatalog(resp.data)))
})

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setCatalog: (state, action) => {
      state.catalogItems = action.payload
    }
  }
})

export const { setCatalog } = catalogSlice.actions
export default catalogSlice.reducer
