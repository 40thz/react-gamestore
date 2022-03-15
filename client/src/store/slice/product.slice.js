import {
  createSlice
} from '@reduxjs/toolkit'

const initialState = {
  priceWithDiscount: null,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  
  reducers: {
    calculateDiscount: (_, action) => {
      const calculate = action.payload.price / 100 * action.payload.discount
      return {
        priceWithDiscount: parseInt(calculate),
      }
    },
  }
})

export const productReducer = productSlice.reducer
export const productActions = productSlice.actions