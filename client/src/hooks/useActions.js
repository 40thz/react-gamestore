import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

import { cartActions } from '../store/slice/cart.slice'

const allActions = {
  ...cartActions
}

export const useAction = () => {
  const dispatch = useDispatch()

  return bindActionCreators(allActions, dispatch)
}