import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const product = action.payload

      if(product.priceWithDiscount){

        action.payload = {
          ...product,
          price: product.priceWithDiscount
        }
      }

      state.push(action.payload)
    },
    removeItem: (state, action) => {
      return state.filter(item => item._id !== action.payload)
    }
  }
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions