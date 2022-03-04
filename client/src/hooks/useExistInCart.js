import { useSelector } from "react-redux"

export const useExistInCart = (product) => {
  const basketItems = useSelector((state) => state.cart);

  return basketItems.some((p) => p._id === product._id);
};
