import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

import { cartActions } from '../store/slice/cart.slice'
import { productActions } from '../store/slice/product.slice'
const allActions = {
  ...cartActions,
  ...productActions
}

export const useAction = () => {
  const dispatch = useDispatch()

  return bindActionCreators(allActions, dispatch)
}